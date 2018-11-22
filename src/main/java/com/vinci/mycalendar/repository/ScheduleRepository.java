package com.vinci.mycalendar.repository;

import com.vinci.mycalendar.vo.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by yux on 2018/10/25.
 */
public interface ScheduleRepository extends JpaRepository<Schedule,Integer>{
}
