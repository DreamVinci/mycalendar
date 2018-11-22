package com.vinci.mycalendar.vo;

import javax.persistence.*;

/**
 * Created by yux on 2018/10/23.
 */
@Table(name="USER")
@Entity
public class User {
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="USER_NAME",length = 255,nullable = false)
    private String userName;

    @Column(name = "LOGIN_NAME",length = 255,nullable = false)
    public String loginName;

    @Column(name = "LOGIN_PWD",length = 255,nullable = false)
    public String loginPwd;

    @Column(name = "REMARK",length = 255)
    public String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getLoginPwd() {
        return loginPwd;
    }

    public void setLoginPwd(String loginPwd) {
        this.loginPwd = loginPwd;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
