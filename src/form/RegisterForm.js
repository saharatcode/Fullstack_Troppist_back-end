import Title from 'antd/lib/typography/Title';
import { Form, Input, Button, Row, Col, Divider, notification, } from 'antd';
import { Link } from 'react-router-dom';

const layout = {
    labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
    wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 }, 
};
function RegisterForm(){
    const onFinish = values => {
        console.log('Received values of form: ', values);
        const body = {
            username: values.email,
            password: values.password,
            name: values.nickname,

        }}


    return(
        <Row justify="center" >
        <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
        {/* <Col> */}
            <div
                className="Form"
            >
                <Row justify="center">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" className="w-1" alt="trippost-logo"/>
                    <Title level={2} className="Title">
                        Register
                    </Title>
                </Row>
                <Divider className="Divider" />
                <Form
                    {...layout}
                    onFinish={onFinish}
                    style={{ width: "100%" }}
                >
                    <Form.Item
                        name="firstName"
                        label={<span>First name</span>}
                        rules={[{ required: true, message: 'Please input your first name!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="lastName"
                        label={<span>Last name</span>}
                        rules={[{ required: true, message: 'Please input your last name!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                                
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        hasFeedback
                        dependencies={["password"]}
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({getFieldValue}) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("Comfirm Password ต้องตรงกับ Password")
                                    
                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                        <Button className="Button" type="primary" htmlType="submit">
                            Register
                        </Button>
                        <Link to="/"><Button>Login</Button></Link>
                </Form>
            </div>
        </Col>
    </Row>

    )
}


export default RegisterForm