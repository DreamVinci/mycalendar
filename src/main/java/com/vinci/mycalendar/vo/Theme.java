package com.vinci.mycalendar.vo;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by yux on 2018/10/24.
 */
@Table(name = "THEME")
@Entity
@Data
@Component
public class Theme {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "THEME_NAME",nullable = false)
    private String themeName;
    @Column(name = "INSERT_TIME",nullable = false)
    private Date insertTime;
    @Column(name = "UPDATE_TIME")
    private Date updateTime;
}
