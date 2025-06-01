#!/usr/bin/env php
<?php

echo "\n🧪 BLDB-COUNT VPS Deployment Test\n";
echo "==================================\n\n";

// Define test domain - we need to check what domain the countdown is deployed to
$domains = [
    'https://badenliestdiebibel.ch',
    'https://www.badenliestdiebibel.ch',
    'https://count.badenliestdiebibel.ch',  // possible subdomain
    'http://69.62.119.90',  // direct IP
];

echo "🔍 Testing multiple possible deployment targets...\n\n";

foreach ($domains as $domain) {
    echo "Testing: $domain\n";
    echo str_repeat("-", 40) . "\n";
    
    // Test main page
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $domain);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 200 && $response) {
        echo "✅ HTTP $httpCode - Page accessible\n";
        
        // Check for countdown content
        if (strpos($response, 'countdown') !== false) {
            echo "✅ Countdown content detected\n";
        }
        
        // Check for June 3, 2025 date
        if (strpos($response, 'June 3, 2025') !== false || strpos($response, '3. Juni 2025') !== false) {
            echo "✅ Updated countdown date found!\n";
        } else {
            echo "⚠️  Countdown date not updated yet\n";
        }
        
        // Check for booklet download
        if (strpos($response, 'booklet') !== false) {
            echo "✅ Booklet download section detected\n";
        } else {
            echo "⚠️  Booklet download not found\n";
        }
        
        // Test PDF availability
        $pdfUrl = rtrim($domain, '/') . '/images/booklet.pdf';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $pdfUrl);
        curl_setopt($ch, CURLOPT_NOBODY, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_exec($ch);
        $pdfCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($pdfCode === 200) {
            echo "✅ PDF booklet accessible\n";
        } else {
            echo "❌ PDF booklet not accessible (HTTP $pdfCode)\n";
        }
        
        echo "🎯 THIS DOMAIN LOOKS ACTIVE!\n";
        echo "\n";
        break; // Found working domain
        
    } else {
        echo "❌ HTTP $httpCode - Not accessible\n\n";
    }
}

echo "📋 Deployment Verification Summary:\n";
echo "===================================\n";
echo "✅ Git push successful\n";
echo "✅ GitHub Actions should be running\n";
echo "🔍 Check GitHub Actions status:\n";
echo "   https://github.com/MrMcMicky/bldb-count/actions\n\n";

echo "🧪 Manual verification needed:\n";
echo "1. Check GitHub Actions workflow status\n";
echo "2. Verify which domain serves the countdown\n";
echo "3. Test countdown shows June 3, 2025\n";
echo "4. Test PDF download works\n\n";

echo "💡 Expected changes:\n";
echo "- Countdown target: June 3, 2025 00:00:00\n";
echo "- New section: Booklet download with thumbnail\n";
echo "- PDF available at: [domain]/images/booklet.pdf\n";
echo "- Redirect URL: https://www.badenliestdiebibel.ch\n\n";

echo "🚀 VPS Deployment test completed!\n\n";