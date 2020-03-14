const wording = [
    ["Update", "最近更新"],
    ["Confirmed", "确诊量"],
    ["Increment", "增长量"],
    ["Tested", "测试量"],
    ["Regions", "地域"],
    ["Unknown Locations", "位置未知"],
    ["At least 1 day in arrears", "相比确诊数据有至少一天的延迟"],
    ["Location", "位置"],
    ["Cases", "数量"],
    ["References", "数据参考"],
    ["Support Us", "支持我们"],
    ["SUPPORT", "捐赠资助"],
    [
        "We promise free access, however, maintaining this server has costs and it's not cheap.", 
        "本网站是免费的，但维护和运营均产生高昂费用。如果你觉得不错，请帮助我们做的更好。"
    ],
    ["Tested = Confirmed + Negative", "测试量 = 确诊 + 阴性"],
    ["Data Incomplete", "数据有缺失"],
    ["map", "地图"],
    ["list", "列表"],

    // Figures
    ["confirmed", "确诊"],
    ["death", "死亡"],
    ["cured", "治愈"],
    ["negative", "阴性"],
    ["tested", "测试量"],
    ["D Co./Te.", "日检出率"],
    ["serious", "危重"],
    ["suspected", "疑似"],

    // Donation
    ["THANK YOU", "谢谢支持"],
    [
        "Donation will be use for server maintenance, pay for data services(eg. Map), and team members health protection.", 
        "捐赠将会被用于服务维护，支付第三方数据服务(如地图等)，和团队成员的自我卫生保护。"
    ],
    ["CLOSE", "关闭"],
]

const alert = {
    en: "<br>This is a data visualisation for <b>COVID-19</b> in the UK, but just <b>as a reference</b>. <br><br> You need to understand: <br><br> 1. These data might <b>NOT</b> be completely accurate or updated. <br> 2. All marker on the map represent an area, <b>NOT building or street</b>. <br> 3. The developer takes <b>NO responsibility</b> for data accuracy and service stability. <br><br> Please double check with <b>official channel</b> before act on it. Cookie in used for statistical purposes.",
    cn: "<br>本页面展示<b>COVID-19</b>英国疫情实时数据可视化, 所有数据及内容<b>仅供参考</b>。 <br><br> 你必须了解以下条款: <br><br> 1. 这些数据可能 <b>不是</b> 最新的或者精确的。 <br> 2. 区域数据中的标记<b>表示区域，不代表街道或建筑</b>。 <br> 3. 开发者<b>没有义务</b>去保证数据的精确及服务的稳定性。 <br><br> 在您基于本数据采取任何行动之前，请参考 <b>官方渠道和指引</b>。 因统计原因浏览器Cookie将被使用。"
}


export function putCN(str){
    for(let i=0;i<wording.length;i++){
        if(str == wording[i][0]){
            return wording[i][1]
        }
    }

    return str
}

export function getAlert(lang){
    if(lang == "zh-CN"){
        return alert.cn
    } else {
        return alert.en
    }
    
}