	$(document).ready(function (e) {
		function t(e, t, r) {
			if (e - r - t < 0) return 100;
			var a = n(e - r),
				o = n(e - t),
				i = 100 * (1 - a / n(e) * (o / n(e - r - t)));
			return isNaN(i) && (i = 0), i
		}

		function n(e) {
			var t = 1;
			for (i = 1; i <= e; i++) t *= i;
			return t
		}

		function r(t, n) {
			color = ["#FF0000", "#EB1400", "#D62900", "#C23D00", "#AD5200", "#996600", "#857A00", "#708F00", "#5CA300", "#47B800", "#33CC00"][parseInt(n / 10)], probdecimal = n.toString(), n = parseInt(n), e("canvas").drawRect({
				data: {
					numero: t,
					prob: n,
					probdec: probdecimal
				},
				layer: !0,
				fillStyle: color,
				x: 20,
				y: 15 * t,
				width: 4 * parseFloat(probdecimal),
				height: 15,
				fromCenter: !1
			}), e("canvas").drawText({
				layer: !0,
				fillStyle: "#777",
				x: 10,
				y: 8 + 15 * t,
				fontSize: 8,
				fontFamily: "Verdana, sans-serif",
				text: t
			}), t % 2 == 0 && e("canvas").drawText({
				layer: !0,
				fillStyle: "#555",
				x: 4 * n + 47,
				y: 6 + 15 * t,
				fontSize: 10,
				fontFamily: "Verdana, sans-serif",
				text: probdecimal + " %"
			})
		}
		e("#calcubaremo").find(".intronum").focus(function () {
				"0" == e(this).val() && e(this).val("")
			}), e("#calcubaremo").find(".intronum").blur(function () {
				if ("" == e(this).val()) e(this).val("0");
				else {
					var t = e(this).attr("name"),
						n = this.value;
					n > 5 && "bolas" == t && (n = 5), n > 99 && "total" == t && (n = 99), this.value = n
				}
			}), e("#calcubaremo ").find(".calcular").click(function () {
				ntem = parseInt(e("#total").val()), bolas = parseInt(e("#bolas").val()), ntem > 0 && bolas > 0 && ntem > bolas && function (n, a) {
					! function (t) {
						e("canvas").clearCanvas(), e("#contcanvas").empty();
						var n = 30 + 15 * t;
						e("#contcanvas").append("<h1>Gráfico:</h1><canvas id='myChart' width='475' height='" + n + "'></canvas>"), e("canvas").drawRect({
							layer: !0,
							fillStyle: "#EfEfEf",
							x: 0,
							y: 0,
							width: 520,
							height: n,
							fromCenter: !1
						})
					}(n);
					var o = 0,
						i = 0,
						s = "";
					for (o = 1; o <= n; o++) i = parseFloat(t(n, a, o)).toFixed(2), s += "<tr><td>" + o + "</td><td>" + i + " %</td></tr>", r(o, i);
					e("#conttabla").empty(), e("#conttabla").append("<h1>Tabla de Probabilidades:</h1><table class='tablaprob' border='0' align='center' width='300'><thead><tr><th scope='col'>Temas<br>preparados</th><th scope='col'>Probabilidad<br>de acierto</th></tr></thead><tbody>" + s + "</tbody></table>")
				}(ntem, bolas)
			}), e("#calcubaremo ").find(".sorteo").click(function () {
				ntem = parseInt(e("#total").val()), bolas = parseInt(e("#bolas").val()), ntem > 0 && bolas > 0 && ntem > bolas && function (t, n) {
					var r = "",
						a = [];
					for (; a.length < n;) {
						var o = Math.floor(Math.random() * t) + 1;
						a.indexOf(o) > -1 || (a[a.length] = o)
					}
					for (x = 0; x < a.length; x++) r = r + "<span class='bola'>" + a[x] + "</span>";
					e("#contsorteo").empty(), e("#contsorteo").append("<h1>Resultado del sorteo:</h1><p class='listabolas'>" + r + "</p>")
				}(ntem, bolas)
			}), e("#calcubaremo").find(".intronum").keydown(function (t) {
				-1 !== e.inArray(t.keyCode, [46, 8, 9, 27, 13, 110]) || /65|67|86|88/.test(t.keyCode) && (!0 === t.ctrlKey || !0 === t.metaKey) || 35 <= t.keyCode && 40 >= t.keyCode || (t.shiftKey || 48 > t.keyCode || 57 < t.keyCode) && (96 > t.keyCode || 105 < t.keyCode) && t.preventDefault()
			}),
			function (e, t, n) {
				"use strict";
				"object" == typeof module && "object" == typeof module.exports ? module.exports = function (e, t) {
					return n(e, t)
				} : n(e, t)
			}("undefined" != typeof window ? window.jQuery : {}, "undefined" != typeof window ? window : this, function (e, t) {
				"use strict";

				function n(e) {
					var t;
					for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (this[t] = e[t]);
					return this
				}

				function r() {
					pe(this, r.baseDefaults)
				}

				function a(e) {
					return "string" === me(e)
				}

				function o(e) {
					return "function" === me(e)
				}

				function i(e) {
					return !isNaN(ge(e)) && !isNaN(ve(e))
				}

				function s(e) {
					return e && e.getContext ? e.getContext("2d") : null
				}

				function l(e) {
					var t, n;
					for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (n = e[t], "string" === me(n) && i(n) && "text" !== t && (e[t] = ve(n)));
					void 0 !== e.text && (e.text = String(e.text))
				}

				function u(e) {
					return (e = pe({}, e)).masks = e.masks.slice(0), e
				}

				function c(e, t) {
					var n;
					e.save(), n = u(t.transforms), t.savedTransforms.push(n)
				}

				function d(e, t) {
					0 === t.savedTransforms.length ? t.transforms = u(Pe) : (e.restore(), t.transforms = t.savedTransforms.pop())
				}

				function h(e, t, n, r) {
					n[r] && (o(n[r]) ? t[r] = n[r].call(e, n) : t[r] = n[r])
				}

				function f(e, t, n) {
					h(e, t, n, "fillStyle"), h(e, t, n, "strokeStyle"), t.lineWidth = n.strokeWidth, n.rounded ? t.lineCap = t.lineJoin = "round" : (t.lineCap = n.strokeCap, t.lineJoin = n.strokeJoin, t.miterLimit = n.miterLimit), n.strokeDash || (n.strokeDash = []), t.setLineDash && t.setLineDash(n.strokeDash), t.webkitLineDash = n.strokeDash, t.lineDashOffset = t.webkitLineDashOffset = t.mozDashOffset = n.strokeDashOffset, t.shadowOffsetX = n.shadowX, t.shadowOffsetY = n.shadowY, t.shadowBlur = n.shadowBlur, t.shadowColor = n.shadowColor, t.globalAlpha = n.opacity, t.globalCompositeOperation = n.compositing, n.imageSmoothing && (t.imageSmoothingEnabled = n.imageSmoothing)
				}

				function g(e, t, n) {
					n.mask && (n.autosave && c(e, t), e.clip(), t.transforms.masks.push(n._args))
				}

				function v(e, t) {
					t._transformed && e.restore()
				}

				function p(e, t, n) {
					n.closed && t.closePath(), n.shadowStroke && 0 !== n.strokeWidth ? (t.stroke(), t.fill(), t.shadowColor = "transparent", t.shadowBlur = 0, t.stroke()) : (t.fill(), "transparent" !== n.fillStyle && (t.shadowColor = "transparent"), 0 !== n.strokeWidth && t.stroke()), n.closed || t.closePath(), v(t, n), n.mask && g(t, m(e), n)
				}

				function y(e, t, n, r, a) {
					n._toRad = n.inDegrees ? xe / 180 : 1, n._transformed = !0, t.save(), n.fromCenter || n._centered || void 0 === r || (void 0 === a && (a = r), n.x += r / 2, n.y += a / 2, n._centered = !0), n.rotate && B(t, n, null), 1 === n.scale && 1 === n.scaleX && 1 === n.scaleY || N(t, n, null), (n.translate || n.translateX || n.translateY) && M(t, n, null)
				}

				function m(t) {
					var n, r = Re.dataCache;
					return r._canvas === t && r._data ? n = r._data : ((n = e.data(t, "jCanvas")) || (n = {
						canvas: t,
						layers: [],
						layer: {
							names: {},
							groups: {}
						},
						eventHooks: {},
						intersecting: [],
						lastIntersected: null,
						cursor: e(t).css("cursor"),
						drag: {
							layer: null,
							dragging: !1
						},
						event: {
							type: null,
							x: null,
							y: null
						},
						events: {},
						transforms: u(Pe),
						savedTransforms: [],
						animating: !1,
						animated: null,
						pixelRatio: 1,
						scaled: !1,
						redrawOnMousemove: !1
					}, e.data(t, "jCanvas", n)), r._canvas = t, r._data = n), n
				}

				function w(e, t, n) {
					var r;
					for (r in Ae.events) Object.prototype.hasOwnProperty.call(Ae.events, r) && (n[r] || n.cursors && n.cursors[r]) && b(e, t, n, r);
					t.events.mouseout || (e.bind("mouseout.jCanvas", function () {
						var n, r = t.drag.layer;
						for (r && (t.drag = {}, X(e, t, r, "dragcancel")), n = 0; n < t.layers.length; n += 1)(r = t.layers[n])._hovered && e.triggerLayerEvent(t.layers[n], "mouseout");
						e.drawLayers()
					}), t.events.mouseout = !0)
				}

				function x(e, t, n, r) {
					Ae.events[r](e, t), n._event = !0
				}

				function b(e, t, n, r) {
					x(e, t, n, r), "mouseover" !== r && "mouseout" !== r && "mousemove" !== r || (t.redrawOnMousemove = !0)
				}

				function _(e, t, n) {
					var r, a;
					if (n.draggable || n.cursors) {
						for (r = ["mousedown", "mousemove", "mouseup"], a = 0; a < r.length; a += 1) x(e, t, n, r[a]);
						n._event = !0
					}
				}

				function C(e, t, n, r) {
					var o = t.layer.names;
					r ? void 0 !== r.name && a(n.name) && n.name !== r.name && delete o[n.name] : r = n, a(r.name) && (o[r.name] = n)
				}

				function k(e, t, n, r) {
					var a, o, i, s, l, u = t.layer.groups;
					if (r) {
						if (void 0 !== r.groups && null !== n.groups)
							for (i = 0; i < n.groups.length; i += 1)
								if (a = u[o = n.groups[i]]) {
									for (l = 0; l < a.length; l += 1)
										if (a[l] === n) {
											s = l, a.splice(l, 1);
											break
										}
									0 === a.length && delete u[o]
								}
					} else r = n;
					if (void 0 !== r.groups && null !== r.groups)
						for (i = 0; i < r.groups.length; i += 1)(a = u[o = r.groups[i]]) || ((a = u[o] = []).name = o), void 0 === s && (s = a.length), a.splice(s, 0, n)
				}

				function L(e) {
					var t, n, r;
					for (t = null, n = e.intersecting.length - 1; n >= 0; n -= 1)
						if ((t = e.intersecting[n])._masks) {
							for (r = t._masks.length - 1; r >= 0; r -= 1)
								if (!t._masks[r].intersects) {
									t.intersects = !1;
									break
								}
							if (t.intersects && !t.intangible) break
						}
					return t && t.intangible && (t = null), t
				}

				function T(e, t, n, r) {
					n && n.visible && n._method && (n._next = r || null, n._method && n._method.call(e, n))
				}

				function S(e, t, n) {
					var r, a, o, i, s, l, u, c, d, h;
					if (s = (a = (i = t.drag).layer) && a.dragGroups || [], r = t.layers, "mousemove" === n || "touchmove" === n) {
						if (i.dragging || (i.dragging = !0, a.dragging = !0, a.bringToFront && (r.splice(a.index, 1), a.index = r.push(a)), a._startX = a.x, a._startY = a.y, a._endX = a._eventX, a._endY = a._eventY, X(e, t, a, "dragstart")), i.dragging)
							for (d = a._eventX - (a._endX - a._startX), h = a._eventY - (a._endY - a._startY), a.updateDragX && (d = a.updateDragX.call(e[0], a, d)), a.updateDragY && (h = a.updateDragY.call(e[0], a, h)), a.dx = d - a.x, a.dy = h - a.y, "y" !== a.restrictDragToAxis && (a.x = d), "x" !== a.restrictDragToAxis && (a.y = h), X(e, t, a, "drag"), c = 0; c < s.length; c += 1)
								if (u = s[c], l = t.layer.groups[u], a.groups && l)
									for (o = 0; o < l.length; o += 1) l[o] !== a && ("y" !== a.restrictDragToAxis && "y" !== l[o].restrictDragToAxis && (l[o].x += a.dx), "x" !== a.restrictDragToAxis && "x" !== l[o].restrictDragToAxis && (l[o].y += a.dy))
					} else "mouseup" !== n && "touchend" !== n || (i.dragging && (a.dragging = !1, i.dragging = !1, t.redrawOnMousemove = t.originalRedrawOnMousemove, X(e, t, a, "dragstop")), t.drag = {})
				}

				function O(t, n, r) {
					var a;
					n.cursors && (a = n.cursors[r]), -1 !== e.inArray(a, De.cursors) && (a = De.prefix + a), a && t.css({
						cursor: a
					})
				}

				function R(e, t) {
					e.css({
						cursor: t.cursor
					})
				}

				function P(e, t, n, r, a) {
					r[n] && t._running && !t._running[n] && (t._running[n] = !0, r[n].call(e[0], t, a), t._running[n] = !1)
				}

				function D(t, n) {
					return !(t.disableEvents || t.intangible && -1 !== e.inArray(n, Xe))
				}

				function X(e, t, n, r, a) {
					D(n, r) && ("mouseout" !== r && O(e, n, r), P(e, n, r, n, a), P(e, n, r, t.eventHooks, a), P(e, n, r, Ae.eventHooks, a))
				}

				function A(t, r, o, i) {
					var s, u, c, d = r._layer ? o : r;
					return r._args = o, (r.draggable || r.dragGroups) && (r.layer = !0, r.draggable = !0), r._method || (i ? r._method = i : r.method ? r._method = e.fn[r.method] : r.type && (r._method = e.fn[Oe.drawings[r.type]])), r.layer && !r._layer ? (s = e(t), c = (u = m(t)).layers, (null === d.name || a(d.name) && void 0 === u.layer.names[d.name]) && (l(r), (d = new n(r)).canvas = t, d.layer = !0, d._layer = !0, d._running = {}, null !== d.data ? d.data = pe({}, d.data) : d.data = {}, null !== d.groups ? d.groups = d.groups.slice(0) : d.groups = [], C(0, u, d), k(0, u, d), w(s, u, d), _(s, u, d), r._event = d._event, d._method === e.fn.drawText && s.measureText(d), null === d.index && (d.index = c.length), c.splice(d.index, 0, d), r._args = d, X(s, u, d, "add"))) : r.layer || l(r), d
				}

				function Y(e) {
					var t, n;
					for (n = 0; n < De.props.length; n += 1) e[t = De.props[n]] = e["_" + t]
				}

				function j(e, t) {
					var n, r;
					for (r = 0; r < De.props.length; r += 1) void 0 !== e[n = De.props[r]] && (e["_" + n] = e[n], De.propsObj[n] = !0, t && delete e[n])
				}

				function z(e, t, n) {
					var r, a, i, s;
					for (r in n)
						if (Object.prototype.hasOwnProperty.call(n, r) && (o(a = n[r]) && (n[r] = a.call(e, t, r)), "object" === me(a) && we(a))) {
							for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (s = a[i], void 0 !== t[r] && (t[r + "." + i] = t[r][i], n[r + "." + i] = s));
							delete n[r]
						}
					return n
				}

				function W(e) {
					var t;
					for (t in e) Object.prototype.hasOwnProperty.call(e, t) && -1 !== t.indexOf(".") && delete e[t]
				}

				function H(t) {
					var n, r, a = [],
						o = 1;
					return "transparent" === t ? t = "rgba(0, 0, 0, 0)" : t.match(/^([a-z]+|#[0-9a-f]+)$/gi) && (n = (r = ue.head).style.color, r.style.color = t, t = e.css(r, "color"), r.style.color = n), t.match(/^rgb/gi) && (a = t.match(/(\d+(\.\d+)?)/gi), t.match(/%/gi) && (o = 2.55), a[0] *= o, a[1] *= o, a[2] *= o, void 0 !== a[3] ? a[3] = ve(a[3]) : a[3] = 1), a
				}

				function E(e) {
					var t, n = 3;
					for ("array" !== me(e.start) && (e.start = H(e.start), e.end = H(e.end)), e.now = [], 1 === e.start[3] && 1 === e.end[3] || (n = 4), t = 0; t < n; t += 1) e.now[t] = e.start[t] + (e.end[t] - e.start[t]) * e.pos, t < 3 && (e.now[t] = be(e.now[t]));
					1 !== e.start[3] || 1 !== e.end[3] ? e.now = "rgba(" + e.now.join(",") + ")" : (e.now.slice(0, 3), e.now = "rgb(" + e.now.join(",") + ")"), e.elem.nodeName ? e.elem.style[e.prop] = e.now : e.elem[e.prop] = e.now
				}

				function I(e) {
					return Oe.mouseEvents[e] && (e = Oe.mouseEvents[e]), e
				}

				function F(e) {
					Ae.events[e] = function (t, n) {
						function r(e) {
							i.x = e.offsetX, i.y = e.offsetY, i.type = a, i.event = e, ("mousemove" !== e.type || n.redrawOnMousemove || n.drag.dragging) && t.drawLayers({
								resetFire: !0
							}), e.preventDefault()
						}
						var a, o, i;
						i = n.event, o = function (e) {
							return Oe.touchEvents[e] && (e = Oe.touchEvents[e]), e
						}(a = "mouseover" === e || "mouseout" === e ? "mousemove" : e), n.events[a] || (o !== a ? t.bind(a + ".jCanvas " + o + ".jCanvas", r) : t.bind(a + ".jCanvas", r), n.events[a] = !0)
					}
				}

				function G(e, t, n) {
					var r, a, o, i, s, l, u, c;
					(r = n._args) && (null !== (o = (a = m(e)).event).x && null !== o.y && (l = o.x * a.pixelRatio, u = o.y * a.pixelRatio, i = t.isPointInPath(l, u) || t.isPointInStroke && t.isPointInStroke(l, u)), s = a.transforms, r.eventX = o.x, r.eventY = o.y, r.event = o.event, c = a.transforms.rotate, l = r.eventX, u = r.eventY, 0 !== c ? (r._eventX = l * ke(-c) - u * Ce(-c), r._eventY = u * ke(-c) + l * Ce(-c)) : (r._eventX = l, r._eventY = u), r._eventX /= s.scaleX, r._eventY /= s.scaleY, i && a.intersecting.push(r), r.intersects = Boolean(i))
				}

				function B(e, t, n) {
					t._toRad = t.inDegrees ? xe / 180 : 1, e.translate(t.x, t.y), e.rotate(t.rotate * t._toRad), e.translate(-t.x, -t.y), n && (n.rotate += t.rotate * t._toRad)
				}

				function N(e, t, n) {
					1 !== t.scale && (t.scaleX = t.scaleY = t.scale), e.translate(t.x, t.y), e.scale(t.scaleX, t.scaleY), e.translate(-t.x, -t.y), n && (n.scaleX *= t.scaleX, n.scaleY *= t.scaleY)
				}

				function M(e, t, n) {
					t.translate && (t.translateX = t.translateY = t.translate), e.translate(t.translateX, t.translateY), n && (n.translateX += t.translateX, n.translateY += t.translateY)
				}

				function J(e) {
					for (; e < 0;) e += 2 * xe;
					return e
				}

				function V(e, t) {
					return e.x + e.radius * ke(t)
				}

				function $(e, t) {
					return e.y + e.radius * Ce(t)
				}

				function q(e, t, n, r) {
					var a, o, i, s, l;
					n === r ? (i = 0, s = 0) : (i = n.x, s = n.y), r.inDegrees || 360 !== r.end || (r.end = 2 * xe), r.start *= n._toRad, r.end *= n._toRad, r.start -= xe / 2, r.end -= xe / 2, l = xe / 180, r.ccw && (l *= -1), Q(e, t, n, r, V(r, r.start + l), $(r, r.start + l), V(r, r.start), $(r, r.start)), t.arc(r.x + i, r.y + s, r.radius, r.start, r.end, r.ccw), a = V(r, r.end + l), o = $(r, r.end + l), U(e, t, n, r, V(r, r.end), $(r, r.end), a, o)
				}

				function K(e, t, n, r, a, o, i, s) {
					var l, u, c, d, h, f, g;
					r.arrowRadius && !n.closed && (g = Le(s - o, i - a), g -= xe, h = n.strokeWidth * ke(g), f = n.strokeWidth * Ce(g), l = i + r.arrowRadius * ke(g + r.arrowAngle / 2), u = s + r.arrowRadius * Ce(g + r.arrowAngle / 2), c = i + r.arrowRadius * ke(g - r.arrowAngle / 2), d = s + r.arrowRadius * Ce(g - r.arrowAngle / 2), t.moveTo(l - h, u - f), t.lineTo(i - h, s - f), t.lineTo(c - h, d - f), t.moveTo(i - h, s - f), t.lineTo(i + h, s + f), t.moveTo(i, s))
				}

				function Q(e, t, n, r, a, o, i, s) {
					r._arrowAngleConverted || (r.arrowAngle *= n._toRad, r._arrowAngleConverted = !0), r.startArrow && K(0, t, n, r, a, o, i, s)
				}

				function U(e, t, n, r, a, o, i, s) {
					r._arrowAngleConverted || (r.arrowAngle *= n._toRad, r._arrowAngleConverted = !0), r.endArrow && K(0, t, n, r, a, o, i, s)
				}

				function Z(e, t, n, r) {
					var a, o, i;
					for (a = 2, Q(0, t, n, r, r.x2 + n.x, r.y2 + n.y, r.x1 + n.x, r.y1 + n.y), void 0 !== r.x1 && void 0 !== r.y1 && t.moveTo(r.x1 + n.x, r.y1 + n.y); o = r["x" + a], i = r["y" + a], void 0 !== o && void 0 !== i;) t.lineTo(o + n.x, i + n.y), a += 1;
					U(0, t, n, r, r["x" + ((a -= 1) - 1)] + n.x, r["y" + (a - 1)] + n.y, r["x" + a] + n.x, r["y" + a] + n.y)
				}

				function ee(e, t, n, r) {
					var a, o, i, s, l;
					for (a = 2, Q(0, t, n, r, r.cx1 + n.x, r.cy1 + n.y, r.x1 + n.x, r.y1 + n.y), void 0 !== r.x1 && void 0 !== r.y1 && t.moveTo(r.x1 + n.x, r.y1 + n.y); o = r["x" + a], i = r["y" + a], s = r["cx" + (a - 1)], l = r["cy" + (a - 1)], void 0 !== o && void 0 !== i && void 0 !== s && void 0 !== l;) t.quadraticCurveTo(s + n.x, l + n.y, o + n.x, i + n.y), a += 1;
					U(0, t, n, r, r["cx" + ((a -= 1) - 1)] + n.x, r["cy" + (a - 1)] + n.y, r["x" + a] + n.x, r["y" + a] + n.y)
				}

				function te(e, t, n, r) {
					var a, o, i, s, l, u, c, d;
					for (a = 2, o = 1, Q(0, t, n, r, r.cx1 + n.x, r.cy1 + n.y, r.x1 + n.x, r.y1 + n.y), void 0 !== r.x1 && void 0 !== r.y1 && t.moveTo(r.x1 + n.x, r.y1 + n.y); i = r["x" + a], s = r["y" + a], l = r["cx" + o], u = r["cy" + o], c = r["cx" + (o + 1)], d = r["cy" + (o + 1)], void 0 !== i && void 0 !== s && void 0 !== l && void 0 !== u && void 0 !== c && void 0 !== d;) t.bezierCurveTo(l + n.x, u + n.y, c + n.x, d + n.y, i + n.x, s + n.y), a += 1, o += 2;
					a -= 1, U(0, t, n, r, r["cx" + ((o -= 2) + 1)] + n.x, r["cy" + (o + 1)] + n.y, r["x" + a] + n.x, r["y" + a] + n.y)
				}

				function ne(e, t, n) {
					return t *= e._toRad, n * ke(t -= xe / 2)
				}

				function re(e, t, n) {
					return t *= e._toRad, n * Ce(t -= xe / 2)
				}

				function ae(e, t, n, r) {
					var a, o, i, s, l, u, c, d, h, f, g;
					for (n === r ? (s = 0, l = 0) : (s = n.x, l = n.y), a = 1, u = d = f = r.x + s, c = h = g = r.y + l, Q(0, t, n, r, u + ne(n, r.a1, r.l1), c + re(n, r.a1, r.l1), u, c), void 0 !== r.x && void 0 !== r.y && t.moveTo(u, c); o = r["a" + a], i = r["l" + a], void 0 !== o && void 0 !== i;) d = f, h = g, f += ne(n, o, i), g += re(n, o, i), t.lineTo(f, g), a += 1;
					U(0, t, n, r, d, h, f, g)
				}

				function oe(e, t, n) {
					isNaN(ge(n.fontSize)) || (n.fontSize += "px"), t.font = n.fontStyle + " " + n.fontSize + " " + n.fontFamily
				}

				function ie(t, n, r, a) {
					var o, i, s, l = Re.propCache;
					if (l.text === r.text && l.fontStyle === r.fontStyle && l.fontSize === r.fontSize && l.fontFamily === r.fontFamily && l.maxWidth === r.maxWidth && l.lineHeight === r.lineHeight) r.width = l.width, r.height = l.height;
					else {
						for (r.width = n.measureText(a[0]).width, s = 1; s < a.length; s += 1)(i = n.measureText(a[s]).width) > r.width && (r.width = i);
						o = t.style.fontSize, t.style.fontSize = r.fontSize, r.height = ve(e.css(t, "fontSize")) * a.length * r.lineHeight, t.style.fontSize = o
					}
				}

				function se(e, t) {
					var n, r, a, o, i, s, l = String(t.text),
						u = t.maxWidth,
						c = l.split("\n"),
						d = [];
					for (a = 0; a < c.length; a += 1) {
						if (n = [], r = "", 1 === (i = (o = c[a]).split(" ")).length || e.measureText(o).width < u) n = [o];
						else {
							for (s = 0; s < i.length; s += 1) e.measureText(r + i[s]).width > u && ("" !== r && n.push(r), r = ""), r += i[s], s !== i.length - 1 && (r += " ");
							n.push(r)
						}
						d = d.concat(n.join("\n").replace(/((\n))|($)/gi, "$2").split("\n"))
					}
					return d
				}
				var le, ue = t.document,
					ce = t.Image,
					de = t.Array,
					he = t.getComputedStyle,
					fe = t.Math,
					ge = t.Number,
					ve = t.parseFloat,
					pe = e.extend,
					ye = e.inArray,
					me = function (e) {
						return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
					},
					we = e.isPlainObject,
					xe = fe.PI,
					be = fe.round,
					_e = fe.abs,
					Ce = fe.sin,
					ke = fe.cos,
					Le = fe.atan2,
					Te = de.prototype.slice,
					Se = e.event.fix,
					Oe = {},
					Re = {
						dataCache: {},
						propCache: {},
						imageCache: {}
					},
					Pe = {
						rotate: 0,
						scaleX: 1,
						scaleY: 1,
						translateX: 0,
						translateY: 0,
						masks: []
					},
					De = {},
					Xe = ["mousedown", "mousemove", "mouseup", "mouseover", "mouseout", "touchstart", "touchmove", "touchend"],
					Ae = {
						events: {},
						eventHooks: {},
						future: {}
					};
				r.baseDefaults = {
						align: "center",
						arrowAngle: 90,
						arrowRadius: 0,
						autosave: !0,
						baseline: "middle",
						bringToFront: !1,
						ccw: !1,
						closed: !1,
						compositing: "source-over",
						concavity: 0,
						cornerRadius: 0,
						count: 1,
						cropFromCenter: !0,
						crossOrigin: null,
						cursors: null,
						disableEvents: !1,
						draggable: !1,
						dragGroups: null,
						groups: null,
						data: null,
						dx: null,
						dy: null,
						end: 360,
						eventX: null,
						eventY: null,
						fillStyle: "transparent",
						fontStyle: "normal",
						fontSize: "12pt",
						fontFamily: "sans-serif",
						fromCenter: !0,
						height: null,
						imageSmoothing: !0,
						inDegrees: !0,
						intangible: !1,
						index: null,
						letterSpacing: null,
						lineHeight: 1,
						layer: !1,
						mask: !1,
						maxWidth: null,
						miterLimit: 10,
						name: null,
						opacity: 1,
						r1: null,
						r2: null,
						radius: 0,
						repeat: "repeat",
						respectAlign: !1,
						restrictDragToAxis: null,
						rotate: 0,
						rounded: !1,
						scale: 1,
						scaleX: 1,
						scaleY: 1,
						shadowBlur: 0,
						shadowColor: "transparent",
						shadowStroke: !1,
						shadowX: 0,
						shadowY: 0,
						sHeight: null,
						sides: 0,
						source: "",
						spread: 0,
						start: 0,
						strokeCap: "butt",
						strokeDash: null,
						strokeDashOffset: 0,
						strokeJoin: "miter",
						strokeStyle: "transparent",
						strokeWidth: 1,
						sWidth: null,
						sx: null,
						sy: null,
						text: "",
						translate: 0,
						translateX: 0,
						translateY: 0,
						type: null,
						visible: !0,
						width: null,
						x: 0,
						y: 0
					}, le = new r, n.prototype = le, Ae.extend = function (t) {
						return t.name && (t.props && pe(le, t.props), e.fn[t.name] = function e(r) {
							var a, o, i, l, u = this;
							for (o = 0; o < u.length; o += 1)(i = s(a = u[o])) && (A(a, l = new n(r), r, e), f(a, i, l), t.fn.call(a, i, l));
							return u
						}, t.type && (Oe.drawings[t.type] = t.name)), e.fn[t.name]
					}, e.fn.getEventHooks = function () {
						var e = {};
						return 0 !== this.length && (e = m(this[0]).eventHooks), e
					}, e.fn.setEventHooks = function (e) {
						var t, n, r = this;
						for (t = 0; t < r.length; t += 1) n = m(r[t]), pe(n.eventHooks, e);
						return r
					}, e.fn.getLayers = function (e) {
						var t, n, r, a, i = [];
						if (0 !== this.length)
							if (n = m(t = this[0]).layers, o(e))
								for (a = 0; a < n.length; a += 1) r = n[a], e.call(t, r) && i.push(r);
							else i = n;
						return i
					}, e.fn.getLayer = function (e) {
						var t, n, r, o, i;
						if (0 !== this.length)
							if (n = (t = m(this[0])).layers, i = me(e), e && e.layer) r = e;
							else if ("number" === i) e < 0 && (e = n.length + e), r = n[e];
						else if ("regexp" === i) {
							for (o = 0; o < n.length; o += 1)
								if (a(n[o].name) && n[o].name.match(e)) {
									r = n[o];
									break
								}
						} else r = t.layer.names[e];
						return r
					}, e.fn.getLayerGroup = function (e) {
						var t, n, r, a, o = me(e);
						if (0 !== this.length)
							if (t = this[0], "array" === o) a = e;
							else if ("regexp" === o) {
							for (r in n = m(t).layer.groups)
								if (r.match(e)) {
									a = n[r];
									break
								}
						} else a = m(t).layer.groups[e];
						return a
					}, e.fn.getLayerIndex = function (e) {
						var t = this.getLayers(),
							n = this.getLayer(e);
						return ye(n, t)
					}, e.fn.setLayer = function (t, n) {
						var r, a, o, s, u, c, d, h = this;
						for (a = 0; a < h.length; a += 1)
							if (r = e(h[a]), o = m(h[a]), s = e(h[a]).getLayer(t)) {
								for (u in C(0, o, s, n), k(0, o, s, n), l(n), n) Object.prototype.hasOwnProperty.call(n, u) && (c = n[u], "object" === (d = me(c)) && we(c) ? (s[u] = pe({}, c), l(s[u])) : "array" === d ? s[u] = c.slice(0) : "string" === d ? 0 === c.indexOf("+=") ? s[u] += ve(c.substr(2)) : 0 === c.indexOf("-=") ? s[u] -= ve(c.substr(2)) : !isNaN(c) && i(c) && "text" !== u ? s[u] = ve(c) : s[u] = c : s[u] = c);
								w(r, o, s), _(r, o, s), !1 === e.isEmptyObject(n) && X(r, o, s, "change", n)
							}
						return h
					}, e.fn.setLayers = function (t, n) {
						var r, a, o, i, s = this;
						for (a = 0; a < s.length; a += 1)
							for (o = (r = e(s[a])).getLayers(n), i = 0; i < o.length; i += 1) r.setLayer(o[i], t);
						return s
					}, e.fn.setLayerGroup = function (t, n) {
						var r, a, o, i, s = this;
						for (a = 0; a < s.length; a += 1)
							if (o = (r = e(s[a])).getLayerGroup(t))
								for (i = 0; i < o.length; i += 1) r.setLayer(o[i], n);
						return s
					}, e.fn.moveLayer = function (t, n) {
						var r, a, o, i, s, l = this;
						for (a = 0; a < l.length; a += 1) r = e(l[a]), i = (o = m(l[a])).layers, (s = r.getLayer(t)) && (s.index = ye(s, i), i.splice(s.index, 1), i.splice(n, 0, s), n < 0 && (n = i.length + n), s.index = n, X(r, o, s, "move"));
						return l
					}, e.fn.removeLayer = function (t) {
						var n, r, a, o, i, s = this;
						for (r = 0; r < s.length; r += 1) n = e(s[r]), a = m(s[r]), o = n.getLayers(), (i = n.getLayer(t)) && (i.index = ye(i, o), o.splice(i.index, 1), delete i._layer, C(0, a, i, {
							name: null
						}), k(0, a, i, {
							groups: null
						}), X(n, a, i, "remove"));
						return s
					}, e.fn.removeLayers = function (t) {
						var n, r, a, o, i, s, l = this;
						for (r = 0; r < l.length; r += 1) {
							for (n = e(l[r]), a = m(l[r]), o = n.getLayers(t), s = 0; s < o.length; s += 1) i = o[s], n.removeLayer(i), s -= 1;
							a.layer.names = {}, a.layer.groups = {}
						}
						return l
					}, e.fn.removeLayerGroup = function (t) {
						var n, r, a, o, i = this;
						if (void 0 !== t)
							for (r = 0; r < i.length; r += 1)
								if (a = (n = e(i[r])).getLayerGroup(t))
									for (a = a.slice(0), o = 0; o < a.length; o += 1) n.removeLayer(a[o]);
						return i
					}, e.fn.addLayerToGroup = function (t, n) {
						var r, a, o, i = this,
							s = [n];
						for (a = 0; a < i.length; a += 1)(o = (r = e(i[a])).getLayer(t)).groups && (s = o.groups.slice(0), -1 === ye(n, o.groups) && s.push(n)), r.setLayer(o, {
							groups: s
						});
						return i
					}, e.fn.removeLayerFromGroup = function (t, n) {
						var r, a, o, i, s = this,
							l = [];
						for (a = 0; a < s.length; a += 1)(o = (r = e(s[a])).getLayer(t)).groups && -1 !== (i = ye(n, o.groups)) && ((l = o.groups.slice(0)).splice(i, 1), r.setLayer(o, {
							groups: l
						}));
						return s
					}, De.cursors = ["grab", "grabbing", "zoom-in", "zoom-out"], De.prefix = function () {
						var e = he(ue.documentElement, "");
						return "-" + (Te.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1] + "-"
					}(), e.fn.triggerLayerEvent = function (t, n) {
						var r, a, o, i = this;
						for (a = 0; a < i.length; a += 1) r = e(i[a]), o = m(i[a]), (t = r.getLayer(t)) && X(r, o, t, n);
						return i
					}, e.fn.drawLayer = function (t) {
						var n, r, a, o = this;
						for (n = 0; n < o.length; n += 1) r = e(o[n]), s(o[n]) && (a = r.getLayer(t), T(r, 0, a));
						return o
					}, e.fn.drawLayers = function (t) {
						var n, r, a, o, i, l, c, d, h, f, g, v, p = this,
							y = t || {};
						for ((c = y.index) || (c = 0), r = 0; r < p.length; r += 1)
							if (n = e(p[r]), s(p[r])) {
								for (h = m(p[r]), !1 !== y.clear && n.clearCanvas(), y.complete && (h.drawLayersComplete = y.complete), a = h.layers, l = c; l < a.length; l += 1)
									if ((o = a[l]).index = l, y.resetFire && (o._fired = !1), T(n, 0, o, l + 1), o._masks = h.transforms.masks.slice(0), o._method === e.fn.drawImage && o.visible) {
										v = !0;
										break
									}
								if (v) continue;
								d = l, y.complete && (y.complete.call(p[r]), delete h.drawLayersComplete), o = L(h), g = (f = h.event).type, h.drag.layer && S(n, h, g), null === (i = h.lastIntersected) || o === i || !i._hovered || i._fired || h.drag.dragging || (h.lastIntersected = null, i._fired = !0, i._hovered = !1, X(n, h, i, "mouseout"), R(n, h)), o && (o[g] || (g = I(g)), o._event && o.intersects && (h.lastIntersected = o, (o.mouseover || o.mouseout || o.cursors) && !h.drag.dragging && (o._hovered || o._fired || (o._fired = !0, o._hovered = !0, X(n, h, o, "mouseover"))), o._fired || (o._fired = !0, f.type = null, X(n, h, o, g)), !o.draggable || o.disableEvents || "mousedown" !== g && "touchstart" !== g || (h.drag.layer = o, h.originalRedrawOnMousemove = h.redrawOnMousemove, h.redrawOnMousemove = !0))), null !== o || h.drag.dragging || R(n, h), d === a.length && (h.intersecting.length = 0, h.transforms = u(Pe), h.savedTransforms.length = 0)
							}
						return p
					}, e.fn.addLayer = function (e) {
						var t, r, a = this;
						for (t = 0; t < a.length; t += 1) s(a[t]) && ((r = new n(e)).layer = !0, A(a[t], r, e));
						return a
					}, De.props = ["width", "height", "opacity", "lineHeight"], De.propsObj = {}, e.fn.animateLayer = function () {
						var t, n, r, a, i, l = this,
							u = Te.call(arguments, 0);
						for ("object" === me(u[2]) ? (u.splice(2, 0, u[2].duration || null), u.splice(3, 0, u[3].easing || null), u.splice(4, 0, u[4].complete || null), u.splice(5, 0, u[5].step || null)) : (void 0 === u[2] ? (u.splice(2, 0, null), u.splice(3, 0, null), u.splice(4, 0, null)) : o(u[2]) && (u.splice(2, 0, null), u.splice(3, 0, null)), void 0 === u[3] ? (u[3] = null, u.splice(4, 0, null)) : o(u[3]) && u.splice(3, 0, null)), n = 0; n < l.length; n += 1) t = e(l[n]), s(l[n]) && (r = m(l[n]), (a = t.getLayer(u[0])) && a._method !== e.fn.draw && (i = pe({}, u[1]), j(i = z(l[n], a, i), !0), j(a), a.style = De.propsObj, e(a).animate(i, {
							duration: u[2],
							easing: e.easing[u[3]] ? u[3] : null,
							complete: function (e, t, n) {
								return function () {
									Y(n), W(n), t.animating && t.animated !== n || e.drawLayers(), n._animating = !1, t.animating = !1, t.animated = null, u[4] && u[4].call(e[0], n), X(e, t, n, "animateend")
								}
							}(t, r, a),
							step: function (e, t, n) {
								return function (r, a) {
									var o, i, s, l = !1;
									"_" === a.prop[0] && (l = !0, a.prop = a.prop.replace("_", ""), n[a.prop] = n["_" + a.prop]), -1 !== a.prop.indexOf(".") && (i = (o = a.prop.split("."))[0], s = o[1], n[i] && (n[i][s] = a.now)), n._pos !== a.pos && (n._pos = a.pos, n._animating || t.animating || (n._animating = !0, t.animating = !0, t.animated = n), t.animating && t.animated !== n || e.drawLayers()), u[5] && u[5].call(e[0], r, a, n), X(e, t, n, "animate", a), l && (a.prop = "_" + a.prop)
								}
							}(t, r, a)
						}), X(t, r, a, "animatestart")));
						return l
					}, e.fn.animateLayerGroup = function (t) {
						var n, r, a, o, i = this,
							s = Te.call(arguments, 0);
						for (r = 0; r < i.length; r += 1)
							if (a = (n = e(i[r])).getLayerGroup(t))
								for (o = 0; o < a.length; o += 1) s[0] = a[o], n.animateLayer.apply(n, s);
						return i
					}, e.fn.delayLayer = function (t, n) {
						var r, a, o, i, s = this;
						for (n = n || 0, a = 0; a < s.length; a += 1) r = e(s[a]), o = m(s[a]), (i = r.getLayer(t)) && (e(i).delay(n), X(r, o, i, "delay"));
						return s
					}, e.fn.delayLayerGroup = function (t, n) {
						var r, a, o, i, s, l = this;
						for (n = n || 0, a = 0; a < l.length; a += 1)
							if (o = (r = e(l[a])).getLayerGroup(t))
								for (s = 0; s < o.length; s += 1) i = o[s], r.delayLayer(i, n);
						return l
					}, e.fn.stopLayer = function (t, n) {
						var r, a, o, i, s = this;
						for (a = 0; a < s.length; a += 1) r = e(s[a]), o = m(s[a]), (i = r.getLayer(t)) && (e(i).stop(n), X(r, o, i, "stop"));
						return s
					}, e.fn.stopLayerGroup = function (t, n) {
						var r, a, o, i, s, l = this;
						for (a = 0; a < l.length; a += 1)
							if (o = (r = e(l[a])).getLayerGroup(t))
								for (s = 0; s < o.length; s += 1) i = o[s], r.stopLayer(i, n);
						return l
					},
					function (t) {
						var n;
						for (n = 0; n < t.length; n += 1) e.fx.step[t[n]] = E
					}(["color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "fillStyle", "outlineColor", "strokeStyle", "shadowColor"]), Oe.touchEvents = {
						mousedown: "touchstart",
						mouseup: "touchend",
						mousemove: "touchmove"
					}, Oe.mouseEvents = {
						touchstart: "mousedown",
						touchend: "mouseup",
						touchmove: "mousemove"
					},
					function (e) {
						var t;
						for (t = 0; t < e.length; t += 1) F(e[t])
					}(["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "touchstart", "touchmove", "touchend", "pointerdown", "pointermove", "pointerup", "contextmenu"]), e.event.fix = function (t) {
						var n, r, a;
						if (r = (t = Se.call(e.event, t)).originalEvent)
							if (a = r.changedTouches, void 0 !== t.pageX && void 0 === t.offsetX) try {
								(n = e(t.currentTarget).offset()) && (t.offsetX = t.pageX - n.left, t.offsetY = t.pageY - n.top)
							} catch (e) {} else if (a) try {
								(n = e(t.currentTarget).offset()) && (t.offsetX = a[0].pageX - n.left, t.offsetY = a[0].pageY - n.top)
							} catch (e) {}
						return t
					}, Oe.drawings = {
						arc: "drawArc",
						bezier: "drawBezier",
						ellipse: "drawEllipse",
						function: "draw",
						image: "drawImage",
						line: "drawLine",
						path: "drawPath",
						polygon: "drawPolygon",
						slice: "drawSlice",
						quadratic: "drawQuadratic",
						rectangle: "drawRect",
						text: "drawText",
						vector: "drawVector",
						save: "saveCanvas",
						restore: "restoreCanvas",
						rotate: "rotateCanvas",
						scale: "scaleCanvas",
						translate: "translateCanvas"
					}, e.fn.draw = function e(t) {
						var r, a, o = this,
							i = new n(t);
						if (Oe.drawings[i.type] && "function" !== i.type) o[Oe.drawings[i.type]](t);
						else
							for (r = 0; r < o.length; r += 1)(a = s(o[r])) && (i = new n(t), A(o[r], i, t, e), i.visible && i.fn && i.fn.call(o[r], a, i));
						return o
					}, e.fn.clearCanvas = function e(t) {
						var r, a, o = this,
							i = new n(t);
						for (r = 0; r < o.length; r += 1)(a = s(o[r])) && (null === i.width || null === i.height ? (a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, o[r].width, o[r].height), a.restore()) : (A(o[r], i, t, e), y(o[r], a, i, i.width, i.height), a.clearRect(i.x - i.width / 2, i.y - i.height / 2, i.width, i.height), v(a, i)));
						return o
					}, e.fn.saveCanvas = function e(t) {
						var r, a, o, i, l, u = this;
						for (r = 0; r < u.length; r += 1)
							if (a = s(u[r]))
								for (i = m(u[r]), o = new n(t), A(u[r], o, t, e), l = 0; l < o.count; l += 1) c(a, i);
						return u
					}, e.fn.restoreCanvas = function e(t) {
						var r, a, o, i, l, u = this;
						for (r = 0; r < u.length; r += 1)
							if (a = s(u[r]))
								for (i = m(u[r]), o = new n(t), A(u[r], o, t, e), l = 0; l < o.count; l += 1) d(a, i);
						return u
					}, e.fn.rotateCanvas = function e(t) {
						var r, a, o, i, l = this;
						for (r = 0; r < l.length; r += 1)(a = s(l[r])) && (i = m(l[r]), o = new n(t), A(l[r], o, t, e), o.autosave && c(a, i), B(a, o, i.transforms));
						return l
					}, e.fn.scaleCanvas = function e(t) {
						var r, a, o, i, l = this;
						for (r = 0; r < l.length; r += 1)(a = s(l[r])) && (i = m(l[r]), o = new n(t), A(l[r], o, t, e), o.autosave && c(a, i), N(a, o, i.transforms));
						return l
					}, e.fn.translateCanvas = function e(t) {
						var r, a, o, i, l = this;
						for (r = 0; r < l.length; r += 1)(a = s(l[r])) && (i = m(l[r]), o = new n(t), A(l[r], o, t, e), o.autosave && c(a, i), M(a, o, i.transforms));
						return l
					}, e.fn.drawRect = function e(t) {
						var r, a, o, i, l, u, c, d, h, g = this;
						for (r = 0; r < g.length; r += 1)(a = s(g[r])) && (o = new n(t), A(g[r], o, t, e), o.visible && (y(g[r], a, o, o.width, o.height), f(g[r], a, o), a.beginPath(), o.width && o.height && (i = o.x - o.width / 2, l = o.y - o.height / 2, (d = _e(o.cornerRadius)) ? (u = o.x + o.width / 2, c = o.y + o.height / 2, o.width < 0 && (h = i, i = u, u = h), o.height < 0 && (h = l, l = c, c = h), u - i - 2 * d < 0 && (d = (u - i) / 2), c - l - 2 * d < 0 && (d = (c - l) / 2), a.moveTo(i + d, l), a.lineTo(u - d, l), a.arc(u - d, l + d, d, 3 * xe / 2, 2 * xe, !1), a.lineTo(u, c - d), a.arc(u - d, c - d, d, 0, xe / 2, !1), a.lineTo(i + d, c), a.arc(i + d, c - d, d, xe / 2, xe, !1), a.lineTo(i, l + d), a.arc(i + d, l + d, d, xe, 3 * xe / 2, !1), o.closed = !0) : a.rect(i, l, o.width, o.height)), G(g[r], a, o), p(g[r], a, o)));
						return g
					}, e.fn.drawArc = function e(t) {
						var r, a, o, i = this;
						for (r = 0; r < i.length; r += 1)(a = s(i[r])) && (o = new n(t), A(i[r], o, t, e), o.visible && (y(i[r], a, o, 2 * o.radius), f(i[r], a, o), a.beginPath(), q(i[r], a, o, o), G(i[r], a, o), p(i[r], a, o)));
						return i
					}, e.fn.drawEllipse = function e(t) {
						var r, a, o, i, l, u = this;
						for (r = 0; r < u.length; r += 1)(a = s(u[r])) && (o = new n(t), A(u[r], o, t, e), o.visible && (y(u[r], a, o, o.width, o.height), f(u[r], a, o), i = o.width * (4 / 3), l = o.height, a.beginPath(), a.moveTo(o.x, o.y - l / 2), a.bezierCurveTo(o.x - i / 2, o.y - l / 2, o.x - i / 2, o.y + l / 2, o.x, o.y + l / 2), a.bezierCurveTo(o.x + i / 2, o.y + l / 2, o.x + i / 2, o.y - l / 2, o.x, o.y - l / 2), G(u[r], a, o), o.closed = !0, p(u[r], a, o)));
						return u
					}, e.fn.drawPolygon = function e(t) {
						var r, a, o, i, l, u, c, d, h, g, v = this;
						for (r = 0; r < v.length; r += 1)
							if ((a = s(v[r])) && (o = new n(t), A(v[r], o, t, e), o.visible)) {
								for (y(v[r], a, o, 2 * o.radius), f(v[r], a, o), i = (u = (l = 2 * xe / o.sides) / 2) + xe / 2, c = o.radius * ke(u), a.beginPath(), g = 0; g < o.sides; g += 1) d = o.x + o.radius * ke(i), h = o.y + o.radius * Ce(i), a.lineTo(d, h), o.concavity && (d = o.x + (c + -c * o.concavity) * ke(i + u), h = o.y + (c + -c * o.concavity) * Ce(i + u), a.lineTo(d, h)), i += l;
								G(v[r], a, o), o.closed = !0, p(v[r], a, o)
							}
						return v
					}, e.fn.drawSlice = function e(t) {
						var r, a, o, i, l, u, c = this;
						for (r = 0; r < c.length; r += 1)(a = s(c[r])) && (o = new n(t), A(c[r], o, t, e), o.visible && (y(c[r], a, o, 2 * o.radius), f(c[r], a, o), o.start *= o._toRad, o.end *= o._toRad, o.start -= xe / 2, o.end -= xe / 2, o.start = J(o.start), o.end = J(o.end), o.end < o.start && (o.end += 2 * xe), i = (o.start + o.end) / 2, l = o.radius * o.spread * ke(i), u = o.radius * o.spread * Ce(i), o.x += l, o.y += u, a.beginPath(), a.arc(o.x, o.y, o.radius, o.start, o.end, o.ccw), a.lineTo(o.x, o.y), G(c[r], a, o), o.closed = !0, p(c[r], a, o)));
						return c
					}, e.fn.drawLine = function e(t) {
						var r, a, o, i = this;
						for (r = 0; r < i.length; r += 1)(a = s(i[r])) && (o = new n(t), A(i[r], o, t, e), o.visible && (y(i[r], a, o), f(i[r], a, o), a.beginPath(), Z(i[r], a, o, o), G(i[r], a, o), p(i[r], a, o)));
						return i
					}, e.fn.drawQuadratic = function e(t) {
						var r, a, o, i = this;
						for (r = 0; r < i.length; r += 1)(a = s(i[r])) && (o = new n(t), A(i[r], o, t, e), o.visible && (y(i[r], a, o), f(i[r], a, o), a.beginPath(), ee(i[r], a, o, o), G(i[r], a, o), p(i[r], a, o)));
						return i
					}, e.fn.drawBezier = function e(t) {
						var r, a, o, i = this;
						for (r = 0; r < i.length; r += 1)(a = s(i[r])) && (o = new n(t), A(i[r], o, t, e), o.visible && (y(i[r], a, o), f(i[r], a, o), a.beginPath(), te(i[r], a, o, o), G(i[r], a, o), p(i[r], a, o)));
						return i
					}, e.fn.drawVector = function e(t) {
						var r, a, o, i = this;
						for (r = 0; r < i.length; r += 1)(a = s(i[r])) && (o = new n(t), A(i[r], o, t, e), o.visible && (y(i[r], a, o), f(i[r], a, o), a.beginPath(), ae(i[r], a, o, o), G(i[r], a, o), p(i[r], a, o)));
						return i
					}, e.fn.drawPath = function e(t) {
						var r, a, o, i, l, u = this;
						for (r = 0; r < u.length; r += 1)
							if ((a = s(u[r])) && (o = new n(t), A(u[r], o, t, e), o.visible)) {
								for (y(u[r], a, o), f(u[r], a, o), a.beginPath(), i = 1; void 0 !== (l = o["p" + i]);) "line" === (l = new n(l)).type ? Z(u[r], a, o, l) : "quadratic" === l.type ? ee(u[r], a, o, l) : "bezier" === l.type ? te(u[r], a, o, l) : "vector" === l.type ? ae(u[r], a, o, l) : "arc" === l.type && q(u[r], a, o, l), i += 1;
								G(u[r], a, o), p(u[r], a, o)
							}
						return u
					}, e.fn.drawText = function e(t) {
						var r, a, o, i, l, u, c, d, h, g, p, m, w, x = this;
						for (r = 0; r < x.length; r += 1)
							if ((a = s(x[r])) && (o = new n(t), A(x[r], o, t, e), o.visible)) {
								if (a.textBaseline = o.baseline, a.textAlign = o.align, oe(x[r], a, o), i = null !== o.maxWidth ? se(a, o) : o.text.toString().split("\n"), ie(x[r], a, o, i), y(x[r], a, o, o.width, o.height), f(x[r], a, o), m = o.x, "left" === o.align ? o.respectAlign ? o.x += o.width / 2 : m -= o.width / 2 : "right" === o.align && (o.respectAlign ? o.x -= o.width / 2 : m += o.width / 2), o.radius)
									for (c = ve(o.fontSize), null === o.letterSpacing && (o.letterSpacing = c / 500), u = 0; u < i.length; u += 1) {
										for (a.save(), a.translate(o.x, o.y), l = i[u], o.flipArcText && ((h = l.split("")).reverse(), l = h.join("")), d = l.length, a.rotate(-xe * o.letterSpacing * (d - 1) / 2), p = 0; p < d; p += 1) g = l[p], 0 !== p && a.rotate(xe * o.letterSpacing), a.save(), a.translate(0, -o.radius), o.flipArcText && a.scale(-1, -1), a.fillText(g, 0, 0), "transparent" !== o.fillStyle && (a.shadowColor = "transparent"), 0 !== o.strokeWidth && a.strokeText(g, 0, 0), a.restore();
										o.radius -= c, o.letterSpacing += c / (1e3 * xe), a.restore()
									} else
										for (u = 0; u < i.length; u += 1) l = i[u], w = o.y + u * o.height / i.length - (i.length - 1) * o.height / i.length / 2, a.shadowColor = o.shadowColor, a.fillText(l, m, w), "transparent" !== o.fillStyle && (a.shadowColor = "transparent"), 0 !== o.strokeWidth && a.strokeText(l, m, w);
								w = 0, "top" === o.baseline ? w += o.height / 2 : "bottom" === o.baseline && (w -= o.height / 2), o._event && (a.beginPath(), a.rect(o.x - o.width / 2, o.y - o.height / 2 + w, o.width, o.height), G(x[r], a, o), a.closePath()), v(a, o)
							}
						return Re.propCache = o, x
					}, e.fn.measureText = function (e) {
						var t, r, a, o = this;
						return (!(r = o.getLayer(e)) || r && !r._layer) && (r = new n(e)), (t = s(o[0])) && (oe(o[0], t, r), a = null !== r.maxWidth ? se(t, r) : r.text.split("\n"), ie(o[0], t, r, a)), r
					}, e.fn.drawImage = function t(r) {
						function a(t, n, r, a, o) {
							return function () {
								var i = e(t);
								if (function (e, t, n, r, a) {
										null === r.width && null === r.sWidth && (r.width = r.sWidth = h.width), null === r.height && null === r.sHeight && (r.height = r.sHeight = h.height), a && (a.width = r.width, a.height = r.height), null !== r.sWidth && null !== r.sHeight && null !== r.sx && null !== r.sy ? (null === r.width && (r.width = r.sWidth), null === r.height && (r.height = r.sHeight), r.cropFromCenter && (r.sx += r.sWidth / 2, r.sy += r.sHeight / 2), r.sy - r.sHeight / 2 < 0 && (r.sy = r.sHeight / 2), r.sy + r.sHeight / 2 > h.height && (r.sy = h.height - r.sHeight / 2), r.sx - r.sWidth / 2 < 0 && (r.sx = r.sWidth / 2), r.sx + r.sWidth / 2 > h.width && (r.sx = h.width - r.sWidth / 2), y(0, t, r, r.width, r.height), f(e, t, r), t.drawImage(h, r.sx - r.sWidth / 2, r.sy - r.sHeight / 2, r.sWidth, r.sHeight, r.x - r.width / 2, r.y - r.height / 2, r.width, r.height)) : (y(0, t, r, r.width, r.height), f(e, t, r), t.drawImage(h, r.x - r.width / 2, r.y - r.height / 2, r.width, r.height)), t.beginPath(), t.rect(r.x - r.width / 2, r.y - r.height / 2, r.width, r.height), G(e, t, r), t.closePath(), v(t, r), g(t, n, r)
									}(t, n, r, a, o), a.layer ? X(i, r, o, "load") : a.load && a.load.call(i[0], o), a.layer && (o._masks = r.transforms.masks.slice(0), a._next)) {
									var s = r.drawLayersComplete;
									delete r.drawLayersComplete, i.drawLayers({
										clear: !1,
										resetFire: !0,
										index: a._next,
										complete: s
									})
								}
							}
						}
						var o, i, l, u, c, d, h, p, w, x = this,
							b = Re.imageCache;
						for (i = 0; i < x.length; i += 1) o = x[i], (l = s(x[i])) && (u = m(x[i]), c = new n(r), d = A(x[i], c, r, t), c.visible && (p = (w = c.source).getContext, w.src || p ? h = w : w && (b[w] && b[w].complete ? h = b[w] : (h = new ce, w.match(/^data:/i) || (h.crossOrigin = c.crossOrigin), h.src = w, b[w] = h)), h && (h.complete || p ? a(o, l, u, c, d)() : (h.onload = a(o, l, u, c, d), h.src = h.src))));
						return x
					}, e.fn.createPattern = function (t) {
						function r() {
							c = a.createPattern(l, i.repeat), i.load && i.load.call(h[0], c)
						}
						var a, i, l, u, c, d, h = this;
						return (a = s(h[0])) ? o(d = (i = new n(t)).source) ? ((l = e("<canvas />")[0]).width = i.width, l.height = i.height, u = s(l), d.call(l, u), r()) : (u = d.getContext, d.src || u ? l = d : (l = new ce, d.match(/^data:/i) || (l.crossOrigin = i.crossOrigin), l.src = d), l.complete || u ? r() : (l.onload = r, l.src = l.src)) : c = null, c
					}, e.fn.createGradient = function (e) {
						var t, r, a, o, i, l, u, c, d, h, f = [];
						if (r = new n(e), t = s(this[0])) {
							for (r.x1 = r.x1 || 0, r.y1 = r.y1 || 0, r.x2 = r.x2 || 0, r.y2 = r.y2 || 0, a = null !== r.r1 && null !== r.r2 ? t.createRadialGradient(r.x1, r.y1, r.r1, r.x2, r.y2, r.r2) : t.createLinearGradient(r.x1, r.y1, r.x2, r.y2), u = 1; void 0 !== r["c" + u]; u += 1) void 0 !== r["s" + u] ? f.push(r["s" + u]) : f.push(null);
							for (o = f.length, null === f[0] && (f[0] = 0), null === f[o - 1] && (f[o - 1] = 1), u = 0; u < o; u += 1) {
								if (null !== f[u]) {
									for (d = 1, h = 0, i = f[u], c = u + 1; c < o; c += 1) {
										if (null !== f[c]) {
											l = f[c];
											break
										}
										d += 1
									}
									i > l && (f[c] = f[u])
								} else null === f[u] && (h += 1, f[u] = i + h * ((l - i) / d));
								a.addColorStop(f[u], r["c" + (u + 1)])
							}
						} else a = null;
						return a
					}, e.fn.setPixels = function e(t) {
						var r, a, o, i, l, u, c, d, h, f, g = this;
						for (a = 0; a < g.length; a += 1)
							if (o = s(r = g[a]), i = m(g[a]), o && (A(r, l = new n(t), t, e), y(g[a], o, l, l.width, l.height), null !== l.width && null !== l.height || (l.width = r.width, l.height = r.height, l.x = l.width / 2, l.y = l.height / 2), 0 !== l.width && 0 !== l.height)) {
								if (f = (d = (c = o.getImageData((l.x - l.width / 2) * i.pixelRatio, (l.y - l.height / 2) * i.pixelRatio, l.width * i.pixelRatio, l.height * i.pixelRatio)).data).length, l.each)
									for (h = 0; h < f; h += 4) u = {
										r: d[h],
										g: d[h + 1],
										b: d[h + 2],
										a: d[h + 3]
									}, l.each.call(r, u, l), d[h] = u.r, d[h + 1] = u.g, d[h + 2] = u.b, d[h + 3] = u.a;
								o.putImageData(c, (l.x - l.width / 2) * i.pixelRatio, (l.y - l.height / 2) * i.pixelRatio), o.restore()
							}
						return g
					}, e.fn.getCanvasImage = function (e, t) {
						var n, r = null;
						return 0 !== this.length && ((n = this[0]).toDataURL && (void 0 === t && (t = 1), r = n.toDataURL("image/" + e, t))), r
					}, e.fn.detectPixelRatio = function (e) {
						var n, r, a, o, i, l, u, c = this;
						for (r = 0; r < c.length; r += 1) a = s(n = c[r]), (u = m(c[r])).scaled || (1 !== (o = (t.devicePixelRatio || 1) / (a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1)) && (i = n.width, l = n.height, n.width = i * o, n.height = l * o, n.style.width = i + "px", n.style.height = l + "px", a.scale(o, o)), u.pixelRatio = o, u.scaled = !0, e && e.call(n, o));
						return c
					}, Ae.clearCache = function () {
						var e;
						for (e in Re) Object.prototype.hasOwnProperty.call(Re, e) && (Re[e] = {})
					}, e.support.canvas = void 0 !== e("<canvas />")[0].getContext, pe(Ae, {
						defaults: le,
						setGlobalProps: f,
						transformShape: y,
						detectEvents: G,
						closePath: p,
						setCanvasFont: oe,
						measureText: ie
					}), e.jCanvas = Ae, e.jCanvasObject = n
			})
	});