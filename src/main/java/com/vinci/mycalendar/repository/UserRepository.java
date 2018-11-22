package com.vinci.mycalendar.repository;

import com.vinci.mycalendar.vo.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by yux on 2018/10/23.
 */
public interface UserRepository extends JpaRepository<User,Integer>{
    User findByLoginName(String loginName);
}
