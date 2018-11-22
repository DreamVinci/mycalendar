package com.vinci.mycalendar.controller;

import com.vinci.mycalendar.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by yux on 2018/10/23.
 */
@Controller
public class PageController {
    @Autowired
    private IUserService userService;
    @RequestMapping("/")
    public String index(HttpServletRequest request){
        String path = request.getContextPath();
        String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
        request.getSession().setAttribute("basePath",basePath);
        return "/login";
    }
    @RequestMapping("/home")
    public String homepage(){
        return "/homepage";
    }

}
