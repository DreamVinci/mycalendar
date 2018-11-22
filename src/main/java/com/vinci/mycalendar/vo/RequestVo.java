package com.vinci.mycalendar.vo;

import lombok.Data;
import org.springframework.stereotype.Component;

/**
 * Created by yux on 2018/10/24.
 */
@Data
@Component
public class RequestVo {
    private boolean status;
    private String msg;
}
