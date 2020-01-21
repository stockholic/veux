export const dateFormat = {

    data() {
        return {
            mixinData : 'mixData'
        }
    },
    methods: {
        getDateAndTime(date){
            if(date != null){
                let hour = date.getHours()
                let min = date.getMinutes() 
                let fullDate =  `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
        
                return `${fullDate} ${hour}:${min}`
            } else {
                return null
            }
           
         }
    },
   
}
