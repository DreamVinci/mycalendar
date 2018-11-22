package com.vinci.mycalendar.controller;

import com.vinci.mycalendar.service.IUserService;
import com.vinci.mycalendar.vo.RequestVo;
import com.vinci.mycalendar.vo.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by yux on 2018/10/23.
 */
@Slf4j
@RestController
@RequestMapping(value = "/user")
public class UserRestController {
    @Autowired
    private IUserService userService;

    @PostMapping("/login")
    public RequestVo login(@RequestParam String loginName, @RequestParam String loginPwd,HttpServletRequest request){
        log.info("login==user["+loginName+"]");
        String msg = "";
        boolean status = true;
        User user = userService.queryUserByLoginName(loginName);
        if(null != user){
            String pwd = user.getLoginPwd();
            if(!pwd.equals(loginPwd)){
                msg = "密码不正确";
                status = false;
            }
        }else{
            msg="用户不存在";
            status = false;
        }
        if(status == false){
            msg+="，请修改后再次登录";
        }else{
            //登录成功存储到session,用户信息
            request.getSession().setAttribute("user",user);
        }
        RequestVo vo = new RequestVo();
        vo.setMsg(msg);
        vo.setStatus(status);
        return vo;
    }
}
