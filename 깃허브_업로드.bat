@echo off
chcp 65001 >nul

:: 이 파일이 있는 실제 폴더 위치로 강제 이동 (System32 문제 해결용)
cd /d "%~dp0"

echo =======================================================
echo [현재 실행 위치: %CD%]
echo 🚀 블로그 코드를 GitHub로 넘기는 중입니다...
echo =======================================================
echo.

SET GIT_EXE="C:\Program Files\Git\cmd\git.exe"
IF NOT EXIST "C:\Program Files\Git\cmd\git.exe" (
    SET GIT_EXE="%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
)

echo [사용될 Git 경로: %GIT_EXE%]

%GIT_EXE% --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ [에러] Git 설치 위치를 찾지 못했습니다!
    echo Git 설치가 정상적으로 안 되었거나 설치 도중 에러가 났을 수 있습니다.
    echo (설치가 방금 끝났다면, 컴퓨터를 꼭 강제로 '다시 시작(재부팅)' 해주셔야 합니다!)
    echo.
    pause
    exit /b
)

:: 실제 명령 시작
echo.
echo 1/4. 초기 설정 중...
%GIT_EXE% config --global user.email "yangsebin7391@naver.com"
%GIT_EXE% config --global user.name "yangsebin06"
%GIT_EXE% init

echo 2/4. 파일 추가 및 포장(Commit)...
%GIT_EXE% add .
%GIT_EXE% commit -m "첫 블로그 프로젝트 세팅 완료!"

echo 3/4. 브랜치 연결 설정...
%GIT_EXE% branch -M main
%GIT_EXE% remote remove origin 2>nul
%GIT_EXE% remote add origin https://github.com/yangsebin06/my-blog.git

echo 4/4. GitHub로 데이터 전송 (Push) 시작...
echo.
echo 🔐 [주의] 인터넷 창으로 GitHub 로그인 인증이 뜨면 들어가서 허용(Authorize)을 눌러주세요!
%GIT_EXE% push -u origin main

echo.
echo =======================================================
echo ✅ 모든 작업 화면이 종료되었습니다! 
echo 위쪽에 에러 메시지(빨간 글씨 혹은 error, fatal 등)가 있는지 꼭 확인해 보세요!
echo =======================================================
pause
