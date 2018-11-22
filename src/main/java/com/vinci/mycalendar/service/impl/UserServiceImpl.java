package com.vinci.mycalendar.service.impl;

import com.vinci.mycalendar.repository.UserRepository;
import com.vinci.mycalendar.service.IUserService;
import com.vinci.mycalendar.vo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by yux on 2018/10/23.
 */
@Service("userService")
public class UserServiceImpl implements IUserService{
    @Autowired
    private UserRepository userDao;
    @Override
    public User queryUserByLoginName(String loginName) {
        return userDao.findByLoginName(loginName);
    }

    @Override
    public void addUser(User user) {

    }
}
