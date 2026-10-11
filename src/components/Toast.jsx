import './Toast.css';
export default function Toast({message,type}){
    return(
        <div className={`toast ${type}`} >
            <span className='toast-icon'>{type === "success" ? '✅ Success':'! Error'}</span>
            <p>{message}</p>
        </div>
    )

}