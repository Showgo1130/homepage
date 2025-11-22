// 多言語対応システム
const translations = {
    ja: {
        // ナビゲーション
        'nav.home': 'ホーム',
        'nav.apps': 'アプリ',
        'nav.privacy': 'プライバシーポリシー',
        'nav.terms': '利用規約',
        'nav.contact': 'お問い合わせ',
        
        // ホームページ
        'home.title': 'モバイルアプリ開発者',
        'home.subtitle': 'コレクション管理やライフスタイルをサポートするアプリを開発しています',
        'home.featured': 'Featured Apps',
        'home.comilog.desc': '書籍やコミックのコレクションを管理するアプリ。次に買う巻を簡単に確認できます。',
        'home.details': '詳細を見る',
        'home.coming.title': 'Coming Soon',
        'home.coming.desc': '新しいアプリを開発中です。お楽しみに！',
        
        // アプリページ
        'apps.title': 'All Apps',
        'apps.comilog.desc': '書籍やコミックのコレクションを管理するアプリ。次に買う巻を簡単に確認できます。',
        'apps.details': '詳細を見る',
        'apps.googleplay': 'Google Play',
        
        // アプリ詳細ページ
        'app.detail.subtitle': '書籍・コミックコレクション管理アプリ',
        'app.detail.googleplay': 'Google Play で入手（準備中）',
        'app.detail.privacy': 'プライバシーポリシー',
        'app.detail.terms': '利用規約',
        'app.detail.features': '主な機能',
        'app.detail.feature1.title': 'シリーズ管理',
        'app.detail.feature1.desc': '書籍やコミックをシリーズごとに整理。次に買うべき巻が一目でわかります。',
        'app.detail.feature2.title': '画像で管理',
        'app.detail.feature2.desc': '表紙画像を登録してビジュアルでコレクションを確認できます。',
        'app.detail.feature3.title': '購入履歴',
        'app.detail.feature3.desc': '購入した巻を記録し、コレクションの進捗を追跡できます。',
        'app.detail.feature4.title': 'モダンUI',
        'app.detail.feature4.desc': '見やすく使いやすいデザインで快適な操作を実現。',
        'app.detail.feature5.title': 'バックアップ機能',
        'app.detail.feature5.desc': 'データをエクスポート・インポートして安全に保管できます。',
        'app.detail.screenshots': 'スクリーンショット',
        'app.detail.requirements': '動作環境',
        'app.detail.req.android': 'Android 5.0以上',
        'app.detail.req.windows': 'Windows 10以上',
        'app.detail.back': 'アプリ詳細に戻る',
        
        // お問い合わせ
        'contact.title': 'お問い合わせ',
        'contact.subtitle': 'アプリに関するご質問、ご要望、バグ報告などは、以下の方法でお気軽にお問い合わせください。',
        'contact.x.title': 'X (Twitter)',
        'contact.x.desc': 'アプリの最新情報やお知らせはXで発信しています。',
        'contact.email.title': 'Email',
        
        // プライバシーポリシー・利用規約
        'privacy.title': 'プライバシーポリシー',
        'privacy.subtitle': 'このページでは、各アプリのプライバシーポリシーをご確認いただけます。',
        'privacy.app.comilog': 'コミロク - ComiLog',
        'privacy.app.view': 'プライバシーポリシーを見る',
        
        'terms.title': '利用規約',
        'terms.subtitle': 'このページでは、各アプリの利用規約をご確認いただけます。',
        'terms.app.comilog': 'コミロク - ComiLog',
        'terms.app.view': '利用規約を見る',
        
        // フッター
        'footer.rights': '© 2025 Showgo. All rights reserved.',
        
        // プライバシーポリシー詳細
        'policy.privacy.title': 'プライバシーポリシー',
        'policy.privacy.h1': '1. 個人情報の取り扱い',
        'policy.privacy.p1': '本アプリは個人情報を収集しません。ユーザーの登録情報、連絡先、位置情報などは一切取得しません。',
        'policy.privacy.h2': '2. データの保存',
        'policy.privacy.p2': 'すべてのデータはお使いのデバイスにローカル保存されます。以下の情報がデバイス内に保存されます：',
        'policy.privacy.li2-1': 'ユーザーが登録したシリーズ情報（書籍名、巻数など）',
        'policy.privacy.li2-2': '登録した画像データ',
        'policy.privacy.li2-3': 'アプリの設定情報',
        'policy.privacy.p2-2': 'これらのデータは、開発者やサーバーに送信されることはありません。',
        'policy.privacy.h3': '3. 第三者への提供',
        'policy.privacy.p3': 'ユーザーデータを第三者に提供することはありません。本アプリは外部サーバーとの通信を行わず、すべてのデータはデバイス内で完結します。',
        'policy.privacy.h4': '4. バックアップ機能',
        'policy.privacy.p4': 'ユーザーが任意でバックアップ機能を使用した場合、データはユーザーが選択した場所（デバイスのストレージ、共有機能など）に保存されます。この場合も、開発者はデータにアクセスできません。',
        'policy.privacy.h5': '5. データの削除',
        'policy.privacy.p5': 'ユーザーはいつでも以下の方法でデータを削除できます：',
        'policy.privacy.li5-1': 'アプリ内の設定からデータをリセット',
        'policy.privacy.li5-2': 'アプリをアンインストール',
        'policy.privacy.p5-2': 'アプリをアンインストールすると、すべてのローカルデータが完全に削除されます。',
        'policy.privacy.h6': '6. セキュリティ',
        'policy.privacy.p6': 'すべてのデータはデバイス内に保存されるため、デバイスのセキュリティ設定（画面ロック、暗号化など）に依存します。デバイスのセキュリティを適切に管理してください。',
        'policy.privacy.h7': '7. 広告について',
        'policy.privacy.p7': '本アプリには広告が表示される場合があります。広告サービス（Google AdMob等）によって、以下の情報が収集される可能性があります：',
        'policy.privacy.li7-1': '広告ID',
        'policy.privacy.li7-2': 'デバイス情報（OS、モデル名）',
        'policy.privacy.li7-3': 'アプリの使用ログ',
        'policy.privacy.p7-2': 'これらの情報は広告配信の最適化のために使用され、個人を特定するものではありません。詳細はGoogleのプライバシーポリシーをご確認ください。',
        'policy.privacy.h8': '8. ポリシーの変更',
        'policy.privacy.p8': '本プライバシーポリシーは、必要に応じて更新されることがあります。重要な変更がある場合は、アプリ内またはウェブサイトでお知らせします。',
        'policy.privacy.h9': '9. お問い合わせ',
        'policy.privacy.p9': 'プライバシーポリシーに関するご質問は、以下までご連絡ください。',
        'policy.privacy.updated': '最終更新日：2025年11月23日',
        
        // 利用規約詳細
        'policy.terms.title': '利用規約',
        'policy.terms.intro': '本利用規約（以下、「本規約」）は、開発者（以下、「当方」）が提供するアプリ「コミロク - ComiLog」（以下、「本アプリ」）の利用条件を定めるものです。本アプリを利用することで、本規約に同意したものとみなします。',
        'policy.terms.h1': '第1条（概要）',
        'policy.terms.li1-1': '本アプリは、ユーザーが購入した書籍・コミックなどを記録・管理するための個人向けアプリです。',
        'policy.terms.li1-2': '本アプリは参考情報やメモの管理を目的とするものであり、情報の正確性・完全性は保証しません。',
        'policy.terms.h2': '第2条（ユーザーデータ）',
        'policy.terms.li2-1': '登録されたデータ（画像・テキスト・シリーズ情報など）は、ユーザーの端末内にのみ保存されます。',
        'policy.terms.li2-2': 'データは外部サーバーに送信されることはなく、すべてローカルストレージで管理されます。',
        'policy.terms.li2-3': '端末の故障、アプリ削除、OS変更等によりデータが消失した場合、当方は一切責任を負いません。',
        'policy.terms.li2-4': 'データのバックアップはユーザー自身の責任で行ってください。',
        'policy.terms.h3': '第3条（広告について）',
        'policy.terms.li3-1': '本アプリでは収益のため広告バナー（Google AdMob）を使用する場合があります。',
        'policy.terms.li3-2': '広告に関連して取得される情報については、Googleのポリシーに従います。',
        'policy.terms.li3-3': '広告の表示内容や頻度は予告なく変更される場合があります。',
        'policy.terms.h4': '第4条（免責事項）',
        'policy.terms.li4-1': '本アプリの利用により生じた損害について、当方は一切の責任を負いません。',
        'policy.terms.li4-2': '本アプリの仕様は予告なく変更・停止される場合があります。',
        'policy.terms.li4-3': '本アプリが常に正常に動作すること、エラーが発生しないことを保証するものではありません。',
        'policy.terms.li4-4': 'OSのアップデート等により、本アプリが正常に動作しなくなる可能性があります。',
        'policy.terms.h5': '第5条（禁止行為）',
        'policy.terms.p5': 'ユーザーは以下を行ってはなりません：',
        'policy.terms.li5-1': '不正アクセス・逆コンパイル等の解析行為',
        'policy.terms.li5-2': '本アプリを不法な目的で使用する行為',
        'policy.terms.li5-3': '公序良俗または法令に反する行為',
        'policy.terms.li5-4': '本アプリの正常な運営を妨げる行為',
        'policy.terms.h6': '第6条（知的財産権）',
        'policy.terms.li6-1': '本アプリに関する知的財産権は、すべて当方に帰属します。',
        'policy.terms.li6-2': 'ユーザーが登録したデータ（画像、テキストなど）の著作権は、ユーザー自身に帰属します。',
        'policy.terms.h7': '第7条（規約の変更）',
        'policy.terms.li7-1': '本規約は必要に応じて変更されることがあります。',
        'policy.terms.li7-2': '変更後に本アプリを利用した場合、変更内容に同意したものとみなします。',
        'policy.terms.li7-3': '重要な変更がある場合は、アプリ内またはウェブサイトでお知らせします。',
        'policy.terms.h8': '第8条（準拠法・管轄裁判所）',
        'policy.terms.li8-1': '本規約は日本法に基づき解釈されます。',
        'policy.terms.li8-2': '本アプリに関する紛争については、開発者の所在地を管轄する裁判所を専属的合意管轄とします。',
        'policy.terms.h9': '第9条（お問い合わせ）',
        'policy.terms.p9': '本規約に関するご質問は、以下までご連絡ください。',
        'policy.terms.updated': '最終更新日：2025年11月23日',
        'policy.terms.established': '制定日：2025年11月23日',
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.apps': 'Apps',
        'nav.privacy': 'Privacy Policy',
        'nav.terms': 'Terms of Service',
        'nav.contact': 'Contact',
        
        // Home Page
        'home.title': 'Mobile App Developer',
        'home.subtitle': 'Developing apps that support collection management and lifestyle',
        'home.featured': 'Featured Apps',
        'home.comilog.desc': 'An app for managing your book and comic collections. Easily check which volume to buy next.',
        'home.details': 'View Details',
        'home.coming.title': 'Coming Soon',
        'home.coming.desc': 'New apps are under development. Stay tuned!',
        
        // Apps Page
        'apps.title': 'All Apps',
        'apps.comilog.desc': 'An app for managing your book and comic collections. Easily check which volume to buy next.',
        'apps.details': 'View Details',
        'apps.googleplay': 'Google Play',
        
        // App Detail Page
        'app.detail.subtitle': 'Book & Comic Collection Management App',
        'app.detail.googleplay': 'Get it on Google Play (Coming Soon)',
        'app.detail.privacy': 'Privacy Policy',
        'app.detail.terms': 'Terms of Service',
        'app.detail.features': 'Key Features',
        'app.detail.feature1.title': 'Series Management',
        'app.detail.feature1.desc': 'Organize books and comics by series. See at a glance which volume to buy next.',
        'app.detail.feature2.title': 'Image Management',
        'app.detail.feature2.desc': 'Register cover images to visually check your collection.',
        'app.detail.feature3.title': 'Purchase History',
        'app.detail.feature3.desc': 'Record purchased volumes and track your collection progress.',
        'app.detail.feature4.title': 'Modern UI',
        'app.detail.feature4.desc': 'Comfortable operation with an easy-to-read and user-friendly design.',
        'app.detail.feature5.title': 'Backup Function',
        'app.detail.feature5.desc': 'Export and import data to keep it safe.',
        'app.detail.screenshots': 'Screenshots',
        'app.detail.requirements': 'System Requirements',
        'app.detail.req.android': 'Android 5.0 or later',
        'app.detail.req.windows': 'Windows 10 or later',
        'app.detail.back': 'Back to App Details',
        
        // Contact
        'contact.title': 'Contact',
        'contact.subtitle': 'For questions, requests, or bug reports about the apps, please feel free to contact us through the following methods.',
        'contact.x.title': 'X (Twitter)',
        'contact.x.desc': 'We share the latest information and updates about our apps on X.',
        'contact.email.title': 'Email',
        
        // Privacy Policy & Terms
        'privacy.title': 'Privacy Policy',
        'privacy.subtitle': 'You can view the privacy policy for each app on this page.',
        'privacy.app.comilog': 'ComiLog',
        'privacy.app.view': 'View Privacy Policy',
        
        'terms.title': 'Terms of Service',
        'terms.subtitle': 'You can view the terms of service for each app on this page.',
        'terms.app.comilog': 'ComiLog',
        'terms.app.view': 'View Terms of Service',
        
        // Footer
        'footer.rights': '© 2025 Showgo. All rights reserved.',
        
        // Privacy Policy Details
        'policy.privacy.title': 'Privacy Policy',
        'policy.privacy.h1': '1. Handling of Personal Information',
        'policy.privacy.p1': 'This app does not collect personal information. We do not collect user registration information, contact information, location information, etc.',
        'policy.privacy.h2': '2. Data Storage',
        'policy.privacy.p2': 'All data is stored locally on your device. The following information is stored on your device:',
        'policy.privacy.li2-1': 'Series information registered by the user (book titles, volume numbers, etc.)',
        'policy.privacy.li2-2': 'Registered image data',
        'policy.privacy.li2-3': 'App settings',
        'policy.privacy.p2-2': 'This data is never sent to developers or servers.',
        'policy.privacy.h3': '3. Sharing with Third Parties',
        'policy.privacy.p3': 'We do not share user data with third parties. This app does not communicate with external servers, and all data is contained within the device.',
        'policy.privacy.h4': '4. Backup Function',
        'policy.privacy.p4': 'If you choose to use the backup function, data will be saved to the location you select (device storage, sharing functions, etc.). Even in this case, developers cannot access the data.',
        'policy.privacy.h5': '5. Data Deletion',
        'policy.privacy.p5': 'You can delete data at any time using the following methods:',
        'policy.privacy.li5-1': 'Reset data from app settings',
        'policy.privacy.li5-2': 'Uninstall the app',
        'policy.privacy.p5-2': 'Uninstalling the app will completely delete all local data.',
        'policy.privacy.h6': '6. Security',
        'policy.privacy.p6': 'Since all data is stored on the device, it depends on the device\'s security settings (screen lock, encryption, etc.). Please manage your device\'s security appropriately.',
        'policy.privacy.h7': '7. About Advertising',
        'policy.privacy.p7': 'Ads may be displayed in this app. Advertising services (such as Google AdMob) may collect the following information:',
        'policy.privacy.li7-1': 'Advertising ID',
        'policy.privacy.li7-2': 'Device information (OS, model name)',
        'policy.privacy.li7-3': 'App usage logs',
        'policy.privacy.p7-2': 'This information is used to optimize ad delivery and does not identify individuals. For details, please check Google\'s privacy policy.',
        'policy.privacy.h8': '8. Policy Changes',
        'policy.privacy.p8': 'This privacy policy may be updated as necessary. If there are important changes, we will notify you within the app or on the website.',
        'policy.privacy.h9': '9. Contact',
        'policy.privacy.p9': 'For questions regarding this privacy policy, please contact us at:',
        'policy.privacy.updated': 'Last updated: November 23, 2025',
        
        // Terms of Service Details
        'policy.terms.title': 'Terms of Service',
        'policy.terms.intro': 'These Terms of Service (the "Terms") set forth the terms and conditions for using the application "ComiLog" (the "App") provided by the developer (the "Provider"). By using the App, you agree to these Terms.',
        'policy.terms.h1': 'Article 1 (Overview)',
        'policy.terms.li1-1': 'The App is a personal application for users to record and manage purchased books and comics.',
        'policy.terms.li1-2': 'The App is intended for managing reference information and memos. The Provider does not guarantee the accuracy or completeness of information.',
        'policy.terms.h2': 'Article 2 (User Data)',
        'policy.terms.li2-1': 'Registered data (images, text, series information, etc.) is stored only on the user\'s device.',
        'policy.terms.li2-2': 'Data is not sent to external servers and is managed entirely in local storage.',
        'policy.terms.li2-3': 'The Provider assumes no responsibility if data is lost due to device failure, app deletion, OS changes, etc.',
        'policy.terms.li2-4': 'Backing up data is the user\'s own responsibility.',
        'policy.terms.h3': 'Article 3 (About Advertising)',
        'policy.terms.li3-1': 'The App may use advertising banners (Google AdMob) for revenue.',
        'policy.terms.li3-2': 'Information collected in relation to advertising follows Google\'s policies.',
        'policy.terms.li3-3': 'Ad content and frequency may change without notice.',
        'policy.terms.h4': 'Article 4 (Disclaimer)',
        'policy.terms.li4-1': 'The Provider assumes no responsibility for damages arising from use of the App.',
        'policy.terms.li4-2': 'The App\'s specifications may be changed or suspended without notice.',
        'policy.terms.li4-3': 'The Provider does not guarantee that the App will always operate normally or that errors will not occur.',
        'policy.terms.li4-4': 'OS updates, etc. may cause the App to stop working properly.',
        'policy.terms.h5': 'Article 5 (Prohibited Acts)',
        'policy.terms.p5': 'Users must not engage in the following:',
        'policy.terms.li5-1': 'Unauthorized access, reverse compilation, or other analysis activities',
        'policy.terms.li5-2': 'Using the App for illegal purposes',
        'policy.terms.li5-3': 'Acts that violate public order and morals or laws',
        'policy.terms.li5-4': 'Acts that interfere with the normal operation of the App',
        'policy.terms.h6': 'Article 6 (Intellectual Property Rights)',
        'policy.terms.li6-1': 'All intellectual property rights related to the App belong to the Provider.',
        'policy.terms.li6-2': 'Copyright of data registered by users (images, text, etc.) belongs to the users themselves.',
        'policy.terms.h7': 'Article 7 (Changes to Terms)',
        'policy.terms.li7-1': 'These Terms may be changed as necessary.',
        'policy.terms.li7-2': 'If you use the App after changes, you are deemed to have agreed to the changes.',
        'policy.terms.li7-3': 'If there are important changes, we will notify you within the app or on the website.',
        'policy.terms.h8': 'Article 8 (Governing Law and Jurisdiction)',
        'policy.terms.li8-1': 'These Terms shall be governed by and construed in accordance with Japanese law.',
        'policy.terms.li8-2': 'Any disputes regarding the App shall be subject to the exclusive jurisdiction of the court having jurisdiction over the developer\'s location.',
        'policy.terms.h9': 'Article 9 (Contact)',
        'policy.terms.p9': 'For questions regarding these Terms, please contact us at:',
        'policy.terms.updated': 'Last updated: November 23, 2025',
        'policy.terms.established': 'Established: November 23, 2025',
    }
};

// 現在の言語を取得
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ja';
}

// 言語を設定
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

// ページの言語を更新
function updatePageLanguage() {
    const lang = getCurrentLanguage();
    document.documentElement.lang = lang;
    
    // data-i18n属性を持つすべての要素を更新
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // 言語切り替えボタンの状態を更新
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// ページ読み込み時に言語を適用
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
    
    // 言語切り替えボタンにイベントリスナーを追加
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
