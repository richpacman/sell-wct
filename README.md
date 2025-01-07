# Tutorial Send WCT Via Stake
> [!IMPORTANT]
> Penerima harus staking terlebih dahulu

Silahkan di pilih mau pakai website [sell-wct](sell-wct.vercel.app) yang lebih mudah atau dengan cara manual.

## Menggunakan Website
1. Pergi ke [sell-wct](sell-wct.vercel.app)
2. Konek wallet
3. Paste address penerima
4. Masukkan jumlah yang ingin di kirim/jual
5. Approve token ke kontrak pintar WCT
6. Kirim/jual token

## Interaksi langsung dengan kontrak

### Bagian Approve
1. Pergi ke kontrak token `https://optimistic.etherscan.io/token/0xef4461891dfb3ac8572ccf7c794664a8dd927945`
2. Konek wallet setelah itu cari fungsi `approve(0x095ea7b3)`
3. Paste kontrak staking WCT berikut `0x521b4c065bbdbe3e20b3727340730936912dfa46` ke dalam kolom ``spender(address)``
4. Masukkan jumlah token yang akan di approve dalam format wei ke dalam kolom `value(uint256)`
5. Write/eksekusi transaksi

### Bagian Kirim
1. Pergi ke kontrak staking WCT `https://optimistic.etherscan.io/address/0x521b4c065bbdbe3e20b3727340730936912dfa46`
2. Konek wallet setelah itu cari fungsi `depositFor(0x2f4f21e2)`
3. Paste address penerima ke dalam kolom `for_(address)`
4. Masukkan jumlah token yang akan di kirim/sell dalam format wei ke dalam kolom `amount(uint256)`
5. Write/eksekusi transaksi

**Kalau masih bingung saya sarankan menggunakan website saja, kodenya open source, silahkan tanya AI atau teman anda yang mengerti koding jika anda tidak yakin.**
