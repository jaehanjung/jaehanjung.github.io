let blackUser = true;
let whiteLocation = [];
let blackLocation = [];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.col').forEach(el => {
    el.addEventListener('click', e => {
      console.log(Array.from(el.classList));
      let col;
      let row;
      let location;
      for (let item of Array.from(el.classList)) {
        console.log(item);
        if (item.includes("-")) {
          col = Number(item.split("-")[1]);
        }
      }
      console.log(Array.from(el.closest('.row').classList));
      for (let item of Array.from(el.closest('.row').classList)) {
        console.log(item);
        if (item.includes("-")) {
          row = Number(item.split("-")[1]);
        }
      }
      console.log("내위치:", (row - 1) * 15 + col);
      location = ((row - 1) * 15 + col);
      if (el.classList.contains("white") || el.classList.contains("black")) {
        alert("다시 놓으세요");
        return;
      }
      if (blackUser) {
        el.classList.add("black");
        blackUser = false;
        blackLocation.push(location);
        blackLocation = blackLocation.sort((x, y) => {
          return x - y;
        });
        let count = 1;
        for (let i = 0; i < blackLocation.length; i++) {
          if (blackLocation[i] + 1 === blackLocation[i + 1]) {
            count += 1;
          }
        }
        if (count > 4) {
          alert("흑이 이겼습니다.")
        }
      } else {
        el.classList.add("white");
        blackUser = true;
        whiteLocation.push(location);
        whiteLocation = whiteLocation.sort((x, y) => {
          return x - y;
        });
        let count = 1;
        for (let i = 0; i < whiteLocation.length; i++) {
          if (whiteLocation[i] + 1 === whiteLocation[i + 1]) {
            count += 1;
          }
        }
        if (count > 4) {
          alert("백이 이겼습니다.")
        }
      }
      console.log("검은돌", blackLocation);
      console.log("흰돌", whiteLocation);
    })
  })
})