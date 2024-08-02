(function main(){
    // 왼쪽 메트릭스
    let leftMatrix = {
        matrixY: 0,
        matrixX: 0,
        matrix: [],
        matrixArea: document.querySelector("#matrix01"),
        btnPrint: document.querySelector("#btnPrint01"),
        inputY: document.querySelector("#input01"),
        inputX: document.querySelector("#input02"),
        //input의 value값을 가지고와서 배열로 변환해주는 메소드
        makeMatrix: function(){
            let tempColumn = [];
            for(let y=0; y<this.matrixY; y++){
                for(let x=0; x<this.matrixX; x++){
                    tempColumn.push(0);
                }
                this.matrix.push(tempColumn);
                tempColumn = [];
            }
        },
        
        //배열 시각화 해주는 메소드
        visualizationMatrix: function(){
            let visulX = '';
            for(let y=0; y<this.matrix.length; y++) {
                for(let x=0; x<this.matrix[0].length; x++) {
                    visulX += `<input id="cell'${y}${x}" class="cell" type="text" value="${leftMatrix.matrix[y][x]}">`;
                    //console.log(visulX);
                }
                visulX = '<div>' + visulX + '</div>';
                this.matrixArea.innerHTML = visulX;
            }
        },

        //프린트 버튼 클릭 이벤트
        btnPrintClickEvent: function(){
            this.btnPrint.addEventListener(
                'click',
                function(event){
                    leftMatrix.matrix = [];
                    leftMatrix.matrixY = Number(leftMatrix.inputY.value);
                    leftMatrix.matrixX = Number(leftMatrix.inputX.value);
                    leftMatrix.makeMatrix();
                    leftMatrix.visualizationMatrix();
                    
                }
            )
        },

        // 메트릭스안에 input 키업 이벤트
        keyupEvent: function(){
            this.matrixArea.addEventListener(
                'input',
                function(event){
                    if(event.target.value.indexOf('-') == 0 && event.target.value.length > 2 && event.data == '-'){ //-1-
                        event.target.value = event.target.value.slice(0, -1);
                    } else if(event.target.value.indexOf('-') == 0 && event.target.value.length > 3){
                        event.target.value = event.target.value.slice(0, -1);
                    } else if(event.data == '-' && event.target.value.indexOf('-') > 0){  //1-
                        event.target.value = event.target.value.slice(0, -1);
                    } else if(event.target.value == '--'){  //--
                        event.target.value = event.target.value.slice(0, -1);
                    } else if(event.target.value.indexOf('-') == -1 && event.target.value.length > 2){  //111
                        event.target.value = event.target.value.slice(0, -1);
                    }

                    let targetId = event.target.id;
                    let y = targetId.slice(-2,-1);
                    let x = targetId.slice(-1);
                    leftMatrix.matrix[y][x] = event.target.value;
                    console.log(leftMatrix.matrix)
                }
                
            )
        }, 
        
        //리셋 버튼 클릭 이벤트
        btnResetClickEvent: function(){
            document.querySelector("#btnReset01").addEventListener(
                'click',
                function(event){
                    leftMatrix.matrix = [];
                    leftMatrix.matrixArea.innerHTML = '';
                    leftMatrix.inputY.value = 0;
                    leftMatrix.inputX.value = 0;
                }
            )
        },

        //랜덤 버튼 클릭 이벤트
        btnRandomClickEvent: function(){
            document.querySelector("#btnRandom01").addEventListener(
                'click',
                function(event){
                    //랜덤배열 만들기
                    let randomNum = 0;
                    for(let y=0; y<leftMatrix.matrix.length; y++){
                        for(let x=0; x<leftMatrix.matrix[0].length; x++){
                            randomNum = Math.floor(Math.random() * 100 );
                            leftMatrix.matrix[y][x] = randomNum;
                        }
                    }

                    //랜덤배열 시각화하기
                    leftMatrix.visualizationMatrix();
                }
            )
        }
    }
    leftMatrix.btnPrintClickEvent();
    leftMatrix.keyupEvent();
    leftMatrix.btnResetClickEvent();
    leftMatrix.btnRandomClickEvent();



    // 오른쪽 메트릭스
    let rightMatrix = {
        matrixY: 0,
        matrixX: 0,
        matrix: [],
        matrixArea: document.querySelector("#matrix02"),
        btnPrint: document.querySelector("#btnPrint02"),
        inputY: document.querySelector("#input03"),
        inputX: document.querySelector("#input04"),

        //input의 value값을 가지고와서 배열로 변환해주는 메소드
        makeMatrix: function(){
            let tempColumn = [];
            for(let y=0; y<this.matrixY; y++){
                for(let x=0; x<this.matrixX; x++){
                    tempColumn.push(0);
                }
                this.matrix.push(tempColumn);
                tempColumn = [];
            }
        },

        //배열을 시각화해주는 메소드
        visualizationMatrix: function(){
            let visulX = '';
            for(let y=0; y<this.matrix.length; y++) {
                for(let x=0; x<this.matrix[0].length; x++) {
                    visulX += `<input id="cell'${y}${x}" class="cell" type="text" value="${rightMatrix.matrix[y][x]}" >`;
                    //console.log(visulX);
                }
                visulX = '<div>' + visulX + '</div>';
                this.matrixArea.innerHTML = visulX;
            }
        },

        //프린트 버튼 클릭 이벤트
        btnPrintClickEvent: function(){
            this.btnPrint.addEventListener(
                'click',
                function(event){
                    rightMatrix.matrix = [];
                    rightMatrix.matrixY = Number(rightMatrix.inputY.value);
                    rightMatrix.matrixX = Number(rightMatrix.inputX.value);
                    rightMatrix.makeMatrix();
                    rightMatrix.visualizationMatrix();
                }
            )
        },

        //메트릭스 input keyup 이벤트
        keyupEvent: function(){
            this.matrixArea.addEventListener(
                'input',
                function(event){
                    if(event.target.value.indexOf('-') == 0 && event.target.value.length > 2 && event.data == '-'){ //-1-
                        event.target.value = event.target.value.slice(0, -1);
                    } else if(event.target.value.indexOf('-') == 0 && event.target.value.length > 3){
                        event.target.value = event.target.value.slice(0, -1);
                    } else if(event.data == '-' && event.target.value.indexOf('-') > 0){  //1-
                        event.target.value = event.target.value.slice(0, -1);
                    } else if(event.target.value == '--'){  //--
                        event.target.value = event.target.value.slice(0, -1);
                    } else if(event.target.value.indexOf('-') == -1 && event.target.value.length > 2){  //111
                        event.target.value = event.target.value.slice(0, -1);
                    }

                    let targetId = event.target.id;
                    let y = targetId.slice(-2,-1);
                    let x = targetId.slice(-1);
                    rightMatrix.matrix[y][x] = event.target.value;
                    console.log(rightMatrix.matrix)
                }
                
            )
        },

        //리셋버튼 클릭 이벤트
        btnResetClickEvent: function(){
            document.querySelector("#btnReset02").addEventListener(
                'click',
                function(event){
                    rightMatrix.matrix = [];
                    rightMatrix.matrixArea.innerHTML = '';
                    rightMatrix.inputY.value = 0;
                    rightMatrix.inputX.value = 0;
                }
            )
        },
        
        //랜덤버튼 클릭 이벤트
        btnRandomClickEvent: function(){
            document.querySelector("#btnRandom02").addEventListener(
                'click',
                function(event){
                    //랜덤배열 만들기
                    let randomNum = 0;
                    for(let y=0; y<rightMatrix.matrix.length; y++){
                        for(let x=0; x<rightMatrix.matrix[0].length; x++){
                            randomNum = Math.floor(Math.random() * 100);
                            rightMatrix.matrix[y][x] = randomNum;
                        }
                    }

                    //랜덤배열 시각화하기
                    rightMatrix.visualizationMatrix();
                }
            )
        }
    }
    rightMatrix.btnPrintClickEvent();
    rightMatrix.keyupEvent();
    rightMatrix.btnResetClickEvent();
    rightMatrix.btnRandomClickEvent();


    // 결과 메트릭스
    let resultMatrix = {
        matrixY: 0,
        matrixX: 0,
        matrix: [],
        matrixArea: document.querySelector("#matrix03"),

        //왼쪽 메트릭스 배열과 오른쪽 메트릭스 배열을 참고하여 결과 메트릭스 배열 만들어주는 메소드
        makeMatrix: function(){
            let tempColumn = [];
            for(let y=0; y<leftMatrix.matrixY; y++){
                for(let x=0; x<leftMatrix.matrixX; x++){
                    tempColumn.push(0);
                }
                this.matrix.push(tempColumn);
                tempColumn = [];
            }
        },

        //배열 시각화 메소드
        visualizationMatrix: function(){
            let visulX = '';
            for(let y=0; y<this.matrix.length; y++) {
                for(let x=0; x<this.matrix[0].length; x++) {
                    visulX += `<input id="cell'${y}${x}" class="cell" type="text" value="${resultMatrix.matrix[y][x].toLocaleString('ko-KR')}" readonly>`;
                }
                visulX = '<div>' + visulX + '</div>';
                this.matrixArea.innerHTML = visulX;
            }
        },

        // 왼쪽 오른쪽 배열값 더해서 배열에 넣어주는 메소드
        matrixPlus: function(){
            for(let y=0; y<leftMatrix.matrix.length; y++) {
                for(let x=0; x<leftMatrix.matrix[0].length; x++) {
                    resultMatrix.matrix[y][x] = Number(leftMatrix.matrix[y][x]) + Number(rightMatrix.matrix[y][x]);
                    resultMatrix.matrix[y][x].toLocaleString("ko-KR");
                }
            }
        },

        //플러스 버튼 클릭 이벤트
        btnPlusClickEvent: function(){
            document.querySelector("#btnP").addEventListener(
                'click',
                function(event){
                    if(leftMatrix.matrixX == rightMatrix.matrixX && leftMatrix.matrixY == rightMatrix.matrixY){
                        //'합계 메트릭스 빈배열 만들기' 메소드 호출
                        resultMatrix.matrix = [];
                        resultMatrix.makeMatrix();

                        // 왼쪽 오른쪽 배열값 더해서 배열에 넣어주는 메소드 호출
                        resultMatrix.matrixPlus();

                        //sumMatrix 배열 시각화 메소드 호출
                        resultMatrix.visualizationMatrix();

                        //버튼 스핀
                        document.querySelector('#icoM').setAttribute('class', 'xi-minus xi-2x');
                        document.querySelector('#icoX').setAttribute('class', 'xi-close xi-2x');
                        document.querySelector('#icoP').setAttribute('class', 'xi-plus xi-2x xi-spin');
                    } else {
                        document.querySelector("#messageBox").style.display = "block";
                        document.querySelector("#messageBox p").innerHTML = "왼쪽 메트릭스의 행렬과<br>오른쪽 메트릭스의 행렬을<br>일치시키세요!"
                    }
                }
            )
        },

        // 왼쪽 오른쪽 배열값 빼서 배열에 넣어주는 메소드
        matrixMinus: function(){
            for(let y=0; y<leftMatrix.matrix.length; y++) {
                for(let x=0; x<leftMatrix.matrix[0].length; x++) {
                    resultMatrix.matrix[y][x] = Number(leftMatrix.matrix[y][x]) - Number(rightMatrix.matrix[y][x]);
                }
            }
        },

        //마이너스 버튼 클릭 이벤트
        btnMinusClickEvent: function(){
            document.querySelector("#btnM").addEventListener(
                'click',
                function(event){
                    if(leftMatrix.matrixX == rightMatrix.matrixX && leftMatrix.matrixY == rightMatrix.matrixY){
                        //'빼기 메트릭스 빈배열 만들기' 메소드 호출
                        resultMatrix.matrix = [];
                        resultMatrix.makeMatrix();

                        // 왼쪽 오른쪽 배열값 빼서 배열에 넣어주는 메소드 호출
                        resultMatrix.matrixMinus();

                        //sumMatrix 배열 시각화 메소드 호출
                        resultMatrix.visualizationMatrix();

                        //버튼 스핀
                        document.querySelector('#icoP').setAttribute('class', 'xi-plus xi-2x');
                        document.querySelector('#icoX').setAttribute('class', 'xi-close xi-2x');
                        document.querySelector('#icoM').setAttribute('class', 'xi-minus xi-2x xi-spin');
                    } else {
                        document.querySelector("#messageBox").style.display = "block";
                        document.querySelector("#messageBox p").innerHTML = "왼쪽 메트릭스의 행렬과<br>오른쪽 메트릭스의 행렬을<br>일치시키세요!"
                    }
                }
            )
        },

        //곱하기 메트릭스 빈배열 만들어주는 메소드
        multiplyMakeMatrix: function(){
            let tempColumn = [];
            for(let y=0; y<leftMatrix.matrixY; y++){
                for(let x=0; x<rightMatrix.matrixX; x++){
                    tempColumn.push(0);
                }
                this.matrix.push(tempColumn);
                tempColumn = [];
            }
        },

        // 왼쪽 오른쪽 배열값 곱해서 배열에 넣어주는 메소드
        matrixMultiply: function(){
            for(let x=0; x<leftMatrix.matrixY; x++){       
                for(let y=0; y<rightMatrix.matrixX; y++){
                    for(let i=0; i<leftMatrix.matrixX; i++){
                        resultMatrix.matrix[x][y] += leftMatrix.matrix[x][i] * rightMatrix.matrix[i][y];
                    }
                }
            }
        },

        btnXClickEvent: function(){
            document.querySelector("#btnX").addEventListener(
                'click',
                function(event){
                    if(leftMatrix.matrixX == rightMatrix.matrixY){
                        //'곱하기 메트릭스 빈배열 만들기' 메소드 호출
                        resultMatrix.matrix = [];
                        resultMatrix.multiplyMakeMatrix();

                        // 왼쪽 오른쪽 배열값 곧해서 배열에 넣어주는 메소드 호출
                        resultMatrix.matrixMultiply();

                        //sumMatrix 배열 시각화 메소드 호출
                        resultMatrix.visualizationMatrix();

                        //버튼 스핀
                        document.querySelector('#icoP').setAttribute('class', 'xi-plus xi-2x');
                        document.querySelector('#icoM').setAttribute('class', 'xi-minus xi-2x');
                        document.querySelector('#icoX').setAttribute('class', 'xi-close xi-2x xi-spin');
                    } else {
                        document.querySelector("#messageBox").style.display = "block";
                        document.querySelector("#messageBox p").innerHTML = "왼쪽 메트릭스의 열과<br>오른쪽 메트릭스의 행을<br>일치시키세요!"
                    }
                }
            )
        }
    }
    resultMatrix.btnPlusClickEvent();
    resultMatrix.btnMinusClickEvent();
    resultMatrix.btnXClickEvent();

    document.querySelector("#btnClose").addEventListener(
        'click',
        function(){
            document.querySelector("#messageBox").style.display = "none";
        }
    );
})();