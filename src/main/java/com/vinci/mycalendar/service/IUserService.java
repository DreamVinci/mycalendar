package com.vinci.mycalendar.service;

import com.vinci.mycalendar.vo.User;

/**
 * Created by yux on 2018/10/23.
 */
public interface IUserService {
    User queryUserByLoginName(String loginName);
    void addUser(User user);
}
