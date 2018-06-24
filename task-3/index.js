class Emitter {
  
  /**
   * Создает экземпляр класса Emitter.
   * @memberof Emitter
   */
  constructor() {
    this.handlers = {};
  }

  /**
   * связывает обработчик с событием
   *
   * @param {String} event - событие
   * @param {Function} handler - обработчик
   * @memberof Emitter
   */
  on(event, handler) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event].push(handler);
  }

  /**
   * Генерирует событие -- вызывает все обработчики, связанные с событием и
   *                       передает им аргумент data
   *
   * @param {String} event
   * @param {*} data
   * @memberof Emitter
   */
  emit(event, data) {
    if (!this.handlers[event]) return;
    for (const handler of this.handlers[event]) {
      handler(data);
    }
  }
}

export default Emitter;
