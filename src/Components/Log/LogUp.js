import React, { useCallback, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from '../../redux/hooks/User';

const schemaSignUp = yup.object().shape({
    firstName: yup.string().required("This is required!"),
    lastName: yup.string().required("This is required!"),
    userName: yup.string().required("This is requiredc!"),
    password: yup
      .string()
      .required("This is required!")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Mật khẩu phải có 8 ký tự trở lên, 1 số, 1 chữ in hoa, 1 ký tự đặc biệt!"
      ),
    passwordConfirm: yup.string().required("This is required!")
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    birthday: yup.date()
  });

const LogUp = () => {
    const {user, actionUser} = useUser();
    
    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schemaSignUp),
      });
    let arr = [];
    useCallback(() => {
        actionUser.getUsers();
        console.log("tét");
    },[arr]);
    
    const submit = (data) => {
        const inforUser = document.getElementById('email').value
        actionUser.getUsers();
        if((user.userList) && (user.userList.length === 0)){
            actionUser.registerUser(data);
        }else if((user.userList) && (user.userList.length > 0)){
            for(let i =0 ; i < user.userList.length; i++){
                arr.push(user.userList[i].userName)
            }
            if(!arr.includes(inforUser)){
                window.alert("success")
                actionUser.registerUser(data);
                
            }else{
                window.alert("fail")
            }
        }
    }
    
    return (
        <div className="logup">
            
            <form noValidate onSubmit={handleSubmit(submit)} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        {...register("firstName")}
                        error={!!errors?.firstName}
                        helperText={errors?.firstName?.message}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        {...register("lastName")}
                        error={!!errors?.lastName}
                        helperText={errors?.lastName?.message}
                    />
                </Grid>
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
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="passwordConfirm"
                        label="Password Confirm"
                        type="password"
                        id="passwordConfirm"
                        {...register("passwordConfirm")}
                        error={!!errors?.passwordConfirm}
                        helperText={errors?.passwordConfirm?.message}
                    />
                </Grid>
                <Grid item xs={12} className="logup-date">
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2021-12-20"
                        {...register("birthday")}
                        error={!!errors?.birthday}
                        helperText={errors?.birthday?.message}
                        InputLabelProps={{
                        shrink: true,
                        }}
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
                Sign Up
            </Button>
        </form>
        </div>
    );
};

export default LogUp;