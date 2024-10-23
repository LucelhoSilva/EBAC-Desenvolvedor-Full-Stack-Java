"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Uso do Map

var meuMap = new Map();
meuMap.set("nome", "Bruno");
meuMap.set("stack", "html, css, js e react");
console.log(meuMap);

// Buscando o valor através da chave
var nome = meuMap.get('nome');
console.log(nome);
console.log(meuMap.size); // 2
console.log(meuMap.has('sobrenome')); // false

// Limpando o Map
// meuMap.clear();
// console.log(meuMap.size); // 0

// Buscando as chaves
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave);
  }

  // Buscando os valores
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    console.log(valor);
  }

  // Buscando as entradas
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entrada = _step3.value;
    console.log(entrada);
  }

  // Removendo valores
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
meuMap.delete('stack');
console.log(meuMap); // Map(1) { 'nome' => 'Bruno' }

// Uso do Set

var cpfs = new Set();
cpfs.add('50718120027');
cpfs.add('77840567029');
cpfs.add('40058126007');
console.log(cpfs); // Set(3) { '50718120027', '77840567029', '40058126007' }

console.log(cpfs.keys());
console.log(cpfs.values());
cpfs.forEach(function (valor) {
  console.log(valor);
});
var array = ['Bruno Oliveira', 'Bianca Cristine', 'Bernardo Oliveira', 'Bruno Oliveira', 'Bernardo Oliveira'];
var arrayComoSet = new Set([].concat(array));
var arraySemDuplicados = _toConsumableArray(arrayComoSet);
console.log(arrayComoSet); // Set(3) { 'Bruno Oliveira', 'Bianca Cristine', 'Bernardo Oliveira' }
console.log(arraySemDuplicados); // [ 'Bruno Oliveira', 'Bianca Cristine', 'Bernardo Oliveira' ]