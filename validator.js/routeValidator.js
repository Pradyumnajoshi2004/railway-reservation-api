const Train = require("../model/trainDetails")
const station = require("../model/stations")

const vaildateRoute = async (req,res,next) => {
    try {
        const {train_id,from,to} = req.body
        const isTrainExists = await Train.findById(train_id)
        if(!isTrainExists) return res.status(500).json({errors:true,message:"the train not exists"})
        
        const trainRoute = Train.train_route.map(station=>station.city)
        const fromIndex = trainRoute.indexOf(from)
        const toIndex = trainRoute.indexOf(to)

        if(fromIndex == -1 || toIndex == -1) return res.status(500).json({errors:true,message:"one or both stations not in the train route"})
        
        if(fromIndex >= toIndex) return res.status(500).json({errors:true,message:"Cannot book: train does not travel from the selected 'from' station to the 'to' station in order." })

        next()

    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

module.exports = vaildateRoute
