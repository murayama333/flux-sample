# Flux Sample

## 準備

ローカルにnodeをインストールをインストールしておいてください。

GitHubからcloneしたら フォルダを移動します。

```
cd flux-sample
```

npmによってライブラリをインストールします。

```
npm install
```

ローカルにサーバを起動して開発をスタートします。

```
npm start
```

> ブラウザから http://localhost:8080/ にアクセスします。

## Flux


![](https://github.com/facebook/flux/raw/master/docs/img/flux-diagram-white-background.png)

+ Dispatcher
  + ActionとStoreを関連付けます。
+ Action
  + アプリケーションの処理を表します。
+ Store
  + アプリケーションのデータ（ステート）を管理します。
+ Component
  + アプリケーションのUI部品です。

## プログラムの読み方

+ public/index.html
+ app/App.js
+ app/components/Message.js
+ app/dispatcher/AppDispatcher.js
+ app/stores/MessageStore.js
+ app/actions/ActionCreator.js

## 参考

https://qiita.com/sl2/items/ff7a07c00f545d245a5c

http://www.cyokodog.net/blog/facebook-flux/
