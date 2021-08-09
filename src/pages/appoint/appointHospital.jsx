import { Component } from 'react'
import { connect } from 'react-redux'
import React, {useEffect, useState} from 'react'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'
import './appointHospital.less'


let weeks_ch = ['一', '二', '三', '四', '五', '六', '日'];
let currentListIndex = 0;

function appointHospital(props) {
  const [currentList, SetCurrentList] = useState([]);
  const [currentMonth, SetCurrentMonth] = useState('');
  const [currentYear, SetCurrentYear] = useState('');
  const [currentDate, SetCurrentDate] = useState('');
  const [currentDay, SetCurrentDay] = useState('');

  useEffect(() => {
    initDate();
  }, []);

  //初始化日历
  const initDate = () => {
    let date = new Date(); // 日期
    let cYear = date.getFullYear(); // 今年
    let cMonth = format(date.getMonth() + 1); // 今月
    let cDate = format(date.getDate()); // 今日
    let currentDay = date.getDay(); // 今天周几
    let cYMD = `${cYear}-${cMonth}-${cDate}`;
    SetCurrentDate(cYMD);
    SetCurrentDay(formatWeek(currentDay));
    createDate(- currentDay)
  };

  // 时间格式化补0操作
  const format = function (num) {
    var f = num < 10 ? '0' + num : num;
    return f
  };

  // getDay() 转换成中文数字
  const formatWeek = function (week) {
    let weeks = ['日','一', '二', '三', '四', '五', '六'];
    return '星期' + weeks[week];
  };

  const createDate = (cDay) => {
    let currDlist = [];
    for (var i = cDay + 1; i <= cDay + 7; i++) {
      currDlist.push(countTime(i))
    }
    SetCurrentList(currDlist);
    SetCurrentMonth(currDlist[0].cMonth);
    SetCurrentYear(currDlist[0].cYear)
  };

  // 计算过去和未来时间
  const countTime = function (n) {
    let date = new Date();
    let getTime = date.getTime() + (24 * 60 * 60 * 1000) * n;
    let needDate = new Date(getTime);
    let getYear = needDate.getFullYear();
    let getMonth = format(needDate.getMonth() + 1);
    let getDate = format(needDate.getDate());
    let getDay = needDate.getDay(); // 今天周几
    let obj = {
      'cYear': getYear,
      'cMonth': getMonth,
      'cDate': getDate,
      'cYMD': `${getYear}-${getMonth}-${getDate}`,
      'cDay': getDay
    };
    return obj;
  };

  // 动态设置 前一周 下一周
  const changeWeek = function (weekNum) {
    let date = new Date(); //日期
    let currentDay = date.getDay(); // 今天周几
    createDate(-currentDay + (7 * weekNum));
  };

  // 获取上一周
  const prevClick = () => {
    currentListIndex --;
    changeWeek(currentListIndex)
  };

  // 获取下一周
  const nextClick = () => {
    currentListIndex ++;
    changeWeek(currentListIndex)
  };

  // 获取当前日期
  const selectTime = (item) => {
    SetCurrentDate(item.cYMD)
    SetCurrentDay(formatWeek(item.cDay));
    props.parent.getDoctorList(item.cYMD);
  };

  // class 动态更改
  const changeCurTab = (date) => {
    let now = new Date(); // 日期
    let cYear = now.getFullYear(); // 今年
    let cMonth = format(now.getMonth() + 1); // 今月
    let cDate = format(now.getDate()); // 今日
    let cYMD = `${cYear}-${cMonth}-${cDate}`;
    if(date.cYMD < cYMD ){
      return 'disable-date'
    }

    if (currentDate === date.cYMD) {
      return 'item-active'
    } else {
      return 'item'
    }
  };

  return (
    <View className='at-row at-row--wrap'>
      <View className='select-date'>请选择日期</View>
      <View className='at-row at-col-12 current_month'>
        <View className='month'>{currentDate}&nbsp;&nbsp;{currentDay}</View>
      </View>
      <View className='at-row at-col-12 at-row__justify--between  date_list'>
        <View className='at-col at-col-1 prev' onClick={prevClick}>
          <View className='at-icon at-icon-chevron-left calendar-icon' />
        </View>
        <View className='at-col at-col-10 all_date'>
          <View className='at-col-12 at-row__justify--around weeks'>
            {
              weeks_ch.map((item) =>
                <View className='week' key={`item-${item}`}>{item}</View>
              )
            }
          </View>
          <View className='at-col-12 at-row__justify--around list'>
            {
              currentList.map((item) =>
                <View className={changeCurTab(item)} onClick={() => {selectTime(item)}} key={`item-${item.cDate}`}>
                  {item.cDate}
                </View>)
            }
          </View>
        </View>
        <View className='at-col at-col-1 next' onClick={nextClick}>
          <View className='at-icon at-icon-chevron-right calendar-icon' />
        </View>
      </View>
    </View>
  )
}
export default appointHospital

