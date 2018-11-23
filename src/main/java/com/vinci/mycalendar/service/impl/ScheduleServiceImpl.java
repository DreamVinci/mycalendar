package com.vinci.mycalendar.service.impl;

import com.vinci.mycalendar.repository.ScheduleRepository;
import com.vinci.mycalendar.service.IScheduleService;
import com.vinci.mycalendar.vo.Schedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by yux on 2018/10/25.
 */
@Service("scheduleService")
public class ScheduleServiceImpl implements IScheduleService{
    @Autowired
    private ScheduleRepository dao;
    @Override
    public void addSchedule(Schedule schedule) {
        dao.save(schedule);
    }
}
