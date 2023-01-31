import React from "react"
import {useNavigate,useParams} from 'react-router-dom'

export const withRouter = (Component) => {
const Wraper = () => {
    const navigate = useNavigate()
    const params = useParams()
    return <Component navigate={navigate} params={params} />
}
return Wraper
}