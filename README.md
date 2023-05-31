# Cookie 検証たち

1. samesite any localhost->localhost は、localhost でしか動作しない[ref](https://blog.prevent.co.jp/entry/2022/05/20/094427)
2. samesite None localhost -> 同ネットワーク IP 指定 は、https で通信しないと動作しない

- つまり、https ができる環境下なら使えることは使える

3. samesite Lax or Strict localhost -> 同ネットワーク IP 指定 は、「Set-Cookie ヘッダーを介して Cookie の設定を試みましたが、「samesite=Lax」属性は指定されていたものの、トップレベル案ビゲーションへのレスポンスではないクロス歳とレスポンスが送信元だったため、ブロックされました」となり、接続できなかった

- つまり、これは無理

4. 中間エンドポイントを経由すると、付与できる

- つまり、中間エンドポイントを経由することで、samesite Lax or Strict localhost -> 同ネットワーク IP 指定 は、動作する
