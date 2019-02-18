# slack_execute_codepipeline
SlackからCodePipelineを実行するAPIをServerless Frameworkで構築する

# インストール
```
$ git clone https://github.com/y-masuoka/slack_execute_codepipeline.git
```

# 導入
1. SlackからSlash Commandsの登録画面を表示する
2. .envを編集する

|キー|概要|
|------|---|
|AWS_ACCESS_KEY_ID|AWS実行ユーザのアクセスキー|
|AWS_SECRET_ACCESS_KEY|AWS実行ユーザのシークレットキー|
|TOKEN|Slash Commandsの登録画面記載のトークン|

3. Dockerを起動する
```
$ docker-compose build
$ docker-compose up -d
```

4. Serverlessコマンドを実行する
```
$ docker-compose exec serverless bash
$ sls deploy
```

5. デプロイ完了後にコンソールに表示されたAPIのURLをコピーする
6. Slash Commandsの登録画面からURLにコピーした値を設定してその他項目を入力して登録する

# 実行
Slackで以下コマンドを実行する(Slash Commandsを/deployで登録した場合の例)
```
/deploy ${CodePipeline名}
```

# 削除
```
$ docker-compose exec serverless bash
$ sls remove
```
