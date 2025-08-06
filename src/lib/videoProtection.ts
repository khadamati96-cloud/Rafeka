// ملف حماية الفيديو - يمنع الوصول المباشر للرابط
class VideoProtection {
  private static instance: VideoProtection;
  private encryptedSegments: string[] = [];

  private constructor() {
    // تقسيم الرابط لأجزاء مشفرة متعددة
    this.encryptedSegments = [
      this.encrypt('https://storage'),
      this.encrypt('.googleapis.com'),
      this.encrypt('/maintenanceapp'),
      this.encrypt('-public/users'),
      this.encrypt('/VideoCo.mp4')
    ];
  }

  public static getInstance(): VideoProtection {
    if (!VideoProtection.instance) {
      VideoProtection.instance = new VideoProtection();
    }
    return VideoProtection.instance;
  }

  private encrypt(text: string): string {
    return btoa(text);
  }

  private decrypt(encodedText: string): string {
    try {
      return atob(encodedText);
    } catch {
      return '';
    }
  }

  public getSecureVideoUrl(): string {
    // فك التشفير وتجميع الأجزاء
    const decryptedParts = this.encryptedSegments.map(segment => this.decrypt(segment));
    return decryptedParts.join('');
  }

  // دالة إضافية لحماية الفيديو من التحميل المباشر
  public async createSecureBlob(): Promise<string> {
    try {
      const url = this.getSecureVideoUrl();
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to load video');
      }
      
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      // تأخير حذف URL لمنع التحميل المباشر
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 5000);
      
      return blobUrl;
    } catch (error) {
      console.error('Video loading error:', error);
      throw error;
    }
  }
}

export default VideoProtection;
