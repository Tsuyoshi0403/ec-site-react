# ECサイト

楽天市場APIを活用したECサイト

## 概要

このプロジェクトは、**楽天市場API**を活用して商品情報を取得し、**ECサイト**として機能するWebアプリケーションです。

将来的にはフルスタックエンジニアとして活躍することを目指しているため、フロントエンドとバックエンドで開発してみました。
現在はまだ開発途中ですが、これから機能を順次追加する予定です。

## デモ動画
![Image](https://github.com/user-attachments/assets/5d549317-decc-4255-88fb-82620c2e5b89)

## 機能・画面一覧

| ログイン画面 | メイン画面 |
| --- | --- |
|<img width="100%" alt="login" src="https://github.com/user-attachments/assets/22244dad-1dd7-4aff-9c2e-cd37f9c06f57">|<img width="100%" alt="top" src="https://github.com/user-attachments/assets/d5c7231a-8fdb-47f0-ae63-8977ed73f3ff">|
|・認証情報（メールアドレス、パスワード）を入力し、ユーザー認証ができます。</br>・メールアドレス形式チェックと認証情報フォームを入力したら、「ログイン」ボタンが活性化します。</br>・「アカウント作成はこちら」リンク押下後、アカウント作成画面に遷移します。| ・各項目に合わせた商品が表示されます。</br>・スライドショーで期間限定の情報を表示します。</br>・ヘッダーの検索フォームで、商品を検索したら商品検索画面に遷移して該当商品が表示されます。|

| 商品検索画面 | 商品画面 |
| --- | --- |
|<img width="100%" alt="searchProduct" src="https://github.com/user-attachments/assets/a43cc094-81d6-44e6-8b12-f5260e0993bf">|<img width="100%" alt="product" src="https://github.com/user-attachments/assets/8b3ca3b5-4c13-4315-8937-7e70fecfa4fc">|
|・ヘッダーの検索フォームで、商品を検索したら該当商品が表示されます。</br>・ジャンルで商品を絞ることができます。</br>・商品を押下後、商品画面に遷移します。| ・商品のタイトル・星評価・値段・商品情報を表示します。 |

| アカウント作成画面 | 認証用メール送信画面 |
| --- | --- |
|<img width="100%" alt="accountSignUp" src="https://github.com/user-attachments/assets/5e17f384-e48d-4d54-865f-ed1bfbbea5aa">|<img width="100%" alt="accountVerify" src="https://github.com/user-attachments/assets/e59b5f5c-5acd-4e12-aae3-bd4384c819f7">|
|・新規ユーザーの情報を入力後、「アカウント作成」ボタンを押下するとメールアドレス宛に認証用メールが送信されます。</br>・「すでにアカウントをお持ちの方はログイン」リンク押下後、ログイン画面に遷移します。</br>・電話番号以外は必須項目となっており、条件を満たさずに「アカウント作成」ボタンを押下した場合、エラートーストを表示します。| ・メールアドレス宛に認証用メールを送信したことを通知します。</br>・「ログイン画面はこちら」リンクを押下後、ログイン画面に遷移します。 |

| 認証エラー画面 | 認証完了画面 |
| --- | --- |
|<img width="100%" alt="verifyFailed" src="https://github.com/user-attachments/assets/50ae47da-18f7-497b-b04e-c60cbc7bad69">|<img width="100%" alt="verifySuccess" src="https://github.com/user-attachments/assets/e671b4cb-8659-4bee-9e9b-2ffc11518c23">|
|・認証用メールURLを押下して失敗した場合、認証エラーを通知します。| ・認証用メールURLを押下して成功した場合、認証完了を通知します。 |

## デザイン
[Figma](https://www.figma.com/design/ZwtF5wiwZwEI3mcFHccHfN/EC%E3%82%B5%E3%82%A4%E3%83%88?node-id=0-1&t=70pWsUUjmJoqtIG6-1)

## ディレクトリ構成
- Atomic Design

## 技術スタック
### フロントエンド
- React 18.2.0
- TypeScript 4.9.5

### バックエンド
- PHP 8.2
- Laravel Framework 11.9

### ライブラリ
- react-dom 18.2.0
- react-router-dom 6.22.3
- recoil 0.7.7
- crypto-js 4.2.0

データフェッチ関連
- ky 1.7.3

UI 全般
- emotion/css 11.11.2
- emotion/react 11.11.4
- emotion/styled 11.11.5
- material-ui/core 4.12.4
- material-ui/icons 4.11.3
- material-ui/lab 4.0.0-alpha.61
- mui/icons-material 5.15.15
- mui/material 5.15.15
- swiper 11.1.8

認証関連
- Laravel/Sanctum 4.0
- tymon/jwt-auth 2.1

### データベース
- MySQL 9.1.0

### インフラ
- Docker 27.4.0
- docker-compose 2.31.0

### バージョン管理
- Git/GitHub

### CI/CD
- ES Lint 8.56.0
- Prettier 3.1.1
- PHP-CS-Fixer
- PHP Intelephense
- barryvdh/laravel-ide-helper 3.2


