:: Executar toda vez que fizer uma alteração no banco e for dar commit

@echo off
echo Iniciando backup do projeto Preco Certo...

:: O comando executa o pg_dump dentro do container e salva na sua pasta local /db
docker exec -t bdPrecoCerto pg_dump -U postgres -d bdPrecoCerto > ./db/init.sql

echo.
echo ==========================================
echo Backup concluido com sucesso!
echo Arquivo atualizado: ./db/init.sql
echo ==========================================
pause