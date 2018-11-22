package com.vinci.mycalendar.controller;

import com.vinci.mycalendar.service.IScheduleService;
import com.vinci.mycalendar.vo.Schedule;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by yux on 2018/11/14.
 */
@Slf4j
@RestController
@RequestMapping(value = "/schedule")
public class ScheduleRestController {
    @Autowired
    private IScheduleService scheduleService;

    public void addSchedule(Schedule schedule){

    }
}
