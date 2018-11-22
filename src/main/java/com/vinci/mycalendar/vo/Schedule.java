package com.vinci.mycalendar.vo;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by yux on 2018/10/24.
 */
@Table(name = "SCHEDULE")
@Entity
@Data
@Component
public class Schedule {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "EVENT_NAME",nullable = false)
    private String eventName;
    @Column(name = "THEME_ID",nullable = false)
    private Integer themeId;
    @Column(name = "IS_ALLDAY")
    private Character isAllDay;
    @Column(name = "START_TIME")
    private Date startTime;
    @Column(name = "END_TIME")
    private Date endTime;
    @Column(name = "IS_REPEAT")
    private Character isRepeat;
    @Column(name = "REPEAT_CYCLE")
    private String repeatCycle;
    @Column(name = "EVENT_DATE")
    private Date eventDate;
    @Column(name = "REMARK")
    private String remark;
    @Column(name = "INSERT_TIME")
    private Date insertTime;
    @Column(name = "UPDATE_TIME")
    private Date updateTime;
}
