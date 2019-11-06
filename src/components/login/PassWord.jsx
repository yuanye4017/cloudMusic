import React ,{useState} from "react"
import { connect } from "react-redux"
import { Button,InputItem } from 'antd-mobile';
import { checkPassWord } from "@/api/api.js"

const PassWord = ({ userPhone , history,getFieldProps }) => {
    const [password,setPassword] = useState('')

    const confirmID = () => {
        var newPhone = userPhone.replace(/\s+/g, "");
        checkPassWord(newPhone,password).then((data) => {
            if(data.code === 200) {
                history.push("/")
            }
        })
    }
    return (
        <>
            <div className="login-phone-num">
                <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    name="password"
                    maxLength={20}
                    value={password}
                    placeholder="请输入密码"
                    onChange={(v) => setPassword(v)} ></InputItem>
            </div>
            <div>
                <Button className="login-next" onClick={() => confirmID()}>确认密码</Button>
            </div>
        </>
    )
}
function mapStateToProps({user}) {
    return {
        userPhone : user.userPhone,
    }
}
export default connect(mapStateToProps)((PassWord))