"use strict";
Object.defineProperty(exports, "__esModule", {
	value: !0
}), exports.NetInfo = void 0;
const Log_1 = require("../Common/Log");
class NetInfo {
	static SetCallback(t) {
		NetInfo.B7 && Log_1.Log.CheckError() && Log_1.Log.Error("Net", 55, "重复设置NetInfo.Callback"), NetInfo.B7 = t
	}
	static get RttMs() {
		return NetInfo.iY
	}
	static SetRttMs(t) {
		t < NetInfo.iY ? NetInfo.iY = t : NetInfo.iY = .9 * NetInfo.iY + .1 * t, this.B7 && this.B7(t)
	}
}(exports.NetInfo = NetInfo)
.iY = 0, NetInfo.B7 = void 0;