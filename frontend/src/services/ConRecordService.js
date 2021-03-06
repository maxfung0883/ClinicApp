import { API_URL } from "@env"
import AsyncStorage from "@react-native-async-storage/async-storage"

const api_url = API_URL
const ConRecordService = {
    Create: async (data) => {
        let url = `${api_url}/api/conrecords/create`
        let accessToken = await AsyncStorage.getItem('token');
        let rtnjson = {}
        await fetch(url, {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(json => rtnjson = json)
            .catch(err => {
                alert('Error on http request');
                console.log('Error on fetch ConRecordService create')
                console.log(err)
            })        
        return rtnjson
    },
    GetRecordsInRange: async (data) => {
        let url = `${api_url}/api/conrecords/GetRecords`
        let accessToken = await AsyncStorage.getItem('token');        
        let rtnjson = {}
        await fetch(url, {
            method: "POST",
            body: JSON.stringify({ ...data }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(json => rtnjson = json)
            .catch(err => {
                alert('Error on http request');
                console.log('Error on fetch ConRecordService GetRecordsInRange')
                console.log(err)
            })        
            // console.log(rtnjson)
        return rtnjson
    }
}

export default ConRecordService