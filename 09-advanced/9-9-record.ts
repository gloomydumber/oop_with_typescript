{
  type PageInfo = {
    title: string;
  }

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = { // Page를 key로 삼고 PageInfo를 value로 삼는 것이 Record의 기능
    home: {title: 'home'},
    about: {title: 'about'},
    contact: {title: 'contact'}
  }
}