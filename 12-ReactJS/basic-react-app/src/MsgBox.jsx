function MsgBox({userName, textColor}){
    let styles = {color: textColor}
    return (
    <p style={styles}>Hi, {userName}!</p>
    )
}

export default MsgBox;