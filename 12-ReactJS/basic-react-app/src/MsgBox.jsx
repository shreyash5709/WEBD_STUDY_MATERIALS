function MsgBox({userName, textColor}){
    return (
        <h1 style={{color: textColor}}>Hi, {userName}!</h1>
    )
}

export default MsgBox;