function MsgBox({userName, textColor}){
    return (
        <p style={{color: textColor}}>Hi, {userName}!</p>
    )
}

export default MsgBox;