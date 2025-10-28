import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const equipment: any[] = [];

  const services = [
    {
      icon: 'Settings',
      title: 'Установка и наладка',
      description: 'Полный цикл установки оборудования с пусконаладочными работами'
    },
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Регулярное ТО и профилактика для бесперебойной работы'
    },
    {
      icon: 'GraduationCap',
      title: 'Обучение персонала',
      description: 'Профессиональное обучение операторов работе с оборудованием'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Техническая поддержка 24/7',
      description: 'Круглосуточная поддержка и консультации наших специалистов'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://cdn.poehali.dev/files/d619e1d1-cad9-4e4a-8d9f-e497282c7298.png" alt="Velino" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex gap-6">
            {['home', 'about', 'catalog', 'services', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'О компании'}
                {section === 'catalog' && 'Каталог'}
                {section === 'services' && 'Услуги'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button className="hidden md:flex" onClick={() => scrollToSection('contacts')}>
            Связаться
          </Button>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzQzNGMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
          
          <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
            <Badge className="mb-4" variant="outline">
              <Icon name="Zap" size={16} className="mr-2" />
              Инновационные решения для вашего производства
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#008080' }}>
              Премиальное оборудование для водоподготовки
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Поставка и обслуживание высокотехнологичного оборудования
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="gap-2">
                <Icon name="Package" size={20} />
                Каталог оборудования
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="gap-2">
                <Icon name="Phone" size={20} />
                Консультация
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">О компании</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Более 15 лет опыта в поставке промышленного оборудования
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Award', value: '15+', label: 'Лет на рынке' },
                { icon: 'Users', value: '500+', label: 'Довольных клиентов' },
                { icon: 'Package', value: '1000+', label: 'Единиц оборудования' },
                { icon: 'Trophy', value: '98%', label: 'Уровень удовлетворенности' }
              ].map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="pt-6">
                    <Icon name={stat.icon} size={48} className="mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold mb-2 text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Target', title: 'Наша миссия', text: 'Обеспечить промышленные предприятия передовым оборудованием для повышения эффективности производства' },
                { icon: 'Eye', title: 'Наше видение', text: 'Стать лидером рынка промышленного оборудования в России и странах СНГ' },
                { icon: 'Heart', title: 'Наши ценности', text: 'Качество, надежность, инновации и ориентация на долгосрочные отношения с клиентами' }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon name={item.icon} size={40} className="text-primary mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="catalog" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Каталог оборудования</h2>
              <p className="text-muted-foreground">
                Широкий ассортимент оборудования
              </p>
            </div>

            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Каталог оборудования скоро будет доступен
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
              <p className="text-muted-foreground">
                Полный спектр услуг по работе с оборудованием
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground">
                Свяжитесь с нами для консультации
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Адрес офиса</h3>
                      <p className="text-muted-foreground">Москва, ул. Промышленная, д. 15, офис 301</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@techequip.ru</p>
                      <p className="text-muted-foreground">sales@techequip.ru</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Отправить заявку</CardTitle>
                  <CardDescription>
                    Заполните форму и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={4} />
                    </div>
                    <Button className="w-full gap-2">
                      <Icon name="Send" size={16} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://cdn.poehali.dev/files/d619e1d1-cad9-4e4a-8d9f-e497282c7298.png" alt="Velino" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground">
                Ваш надежный партнер в области промышленного оборудования
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary transition-colors cursor-pointer">Сертификаты</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Гарантия</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Доставка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                {['Facebook', 'Twitter', 'Instagram', 'Linkedin'].map((social) => (
                  <button 
                    key={social}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  >
                    <Icon name={social} size={18} />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Velino. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;