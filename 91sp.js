[mitm]
hostname = h5.7j8x.fun, api.cxznl.com, api.bjkmy.net, h5.glv2.ltd, h5.yv4w.site
[rewrite_local]
# 广告衮
^https:\/\/(h5.\w+.(fun|ltd|site)\/apis|api.cxznl.com|api.bjkmy.net)\/common\/homepage\/official_website_popup url reject-200
# 重写
^https:\/\/(h5.\w+.(fun|ltd|site)\/apis|api.cxznl.com|api.bjkmy.net)\/(m_user\/info|m_sns\/(film\/(film_detail|home_recommend_list)|short_video)|common\/splash_config) url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/91SP/crack.js
# 自动登录
^https:\/\/(h5.\w+.(fun|ltd|site)\/apis|api.cxznl.com|api.bjkmy.net)\/m_sns\/(film\/film_detail|video\/apply_play_permission) url script-request-header https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/91SP/auto-login.js