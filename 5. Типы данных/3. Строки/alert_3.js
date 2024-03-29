describe("truncate", function() {
    it("усекает строку до заданной длины (включая многоточие)", function() {
      assert.equal(
        truncate("Вот, что мне хотелось бы сказать на эту тему:", 20),
        "Вот, что мне хотело…"
      );
    });
  
    it("не меняет и так короткие строки", function() {
      assert.equal(
        truncate("Всем привет!", 20),
        "Всем привет!"
      );
    });
  
  });