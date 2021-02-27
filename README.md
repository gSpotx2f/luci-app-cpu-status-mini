# luci-app-cpu-status-mini
CPU utilization info for the LuCI status page (OpenWrt webUI).

OpenWrt >= 19.07.

Advanced version: [luci-app-cpu-status](https://github.com/gSpotx2f/luci-app-cpu-status).

**Installation notes:**

    wget --no-check-certificate -O /tmp/luci-app-cpu-status-mini_0.1-1_all.ipk https://github.com/gSpotx2f/luci-app-cpu-status-mini/raw/master/packages/19.07/luci-app-cpu-status-mini_0.1-1_all.ipk
    opkg --force-overwrite install /tmp/luci-app-cpu-status-mini_0.1-1_all.ipk
    rm /tmp/luci-app-cpu-status-mini_0.1-1_all.ipk
    /etc/init.d/rpcd restart

**i18n-ru:**

    wget --no-check-certificate -O /tmp/luci-i18n-cpu-status-mini-ru_0.1-1_all.ipk https://github.com/gSpotx2f/luci-app-cpu-status-mini/raw/master/packages/19.07/luci-i18n-cpu-status-mini-ru_0.1-1_all.ipk
    opkg --force-overwrite install /tmp/luci-i18n-cpu-status-mini-ru_0.1-1_all.ipk
    rm /tmp/luci-i18n-cpu-status-mini-ru_0.1-1_all.ipk

**Screenshots:**

![](https://github.com/gSpotx2f/luci-app-cpu-status-mini/blob/master/screenshots/01.jpg)
