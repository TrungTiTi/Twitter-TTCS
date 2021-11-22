import React, { useCallback, useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from '../../redux/hooks/User';
import { useNavigate } from 'react-router-dom';


const schemaSignUp = yup.object().shape({
    userName: yup.string().required("This is requiredc!"),
    password: yup
      .string()
      .required("This is required!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mật khẩu phải có 8 ký tự trở lên, 1 số, 1 chữ in hoa, 1 ký tự đặc biệt!"
      ),
    
  });

const LogIn = () => {
    const {handleSubmit, register,formState: { errors },} = useForm({
        resolver: yupResolver(schemaSignUp),
      });
    const [inforUser, setInforUser] = useState({
        userName:'',
        password: '',
    })
    const {user, actionUser} = useUser();
    const navigate = useNavigate();
    console.log(inforUser);
    useEffect(() => {
        if(user.userList.some(u =>
            u.userName === inforUser.userName && u.password === inforUser.password
        )){
            localStorage.setItem('users', JSON.stringify(inforUser.userName))
            navigate('/home')
        }
        
    },[user.userList, inforUser, navigate])

    const submit = (data) => {
        setInforUser(() => data);
        actionUser.getUsers()
    }
    return (
        <div className="logup">
            
            <form noValidate onSubmit={handleSubmit(submit)} >
                <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="User Name"
                            name="userName"
                            {...register("userName")}
                            error={!!errors?.userName}
                            helperText={errors?.userName?.message}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            {...register("password")}
                            error={!!errors?.password}
                            helperText={errors?.password?.message}
                                />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="a"
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
};

export default LogIn;