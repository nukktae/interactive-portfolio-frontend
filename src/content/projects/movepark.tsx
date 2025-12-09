import React from 'react';
import { ProjectDetailContent } from '@/types/projectDetail';
import {
  Code, Database, Smartphone, BarChart3, Users, Zap, Shield, Layers, TrendingUp,
  Award, Brain, Mail, FileText, Sparkles, Component, LayoutTemplate, Workflow, ExternalLink, MapPin, Cloud
} from 'lucide-react';
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiVercel,
  SiGithub, SiGooglemaps
} from 'react-icons/si';

export const moveparkContent: ProjectDetailContent = {
  slug: 'movepark',
  sections: [
    {
      id: 'overview',
      type: 'overview',
      content: React.createElement(
        React.Fragment,
        null,
        React.createElement('p', null,
          'MovePARK is an intelligent navigation and event planning platform that helps users plan their journey to events at Olympic Park facilities by integrating real-time traffic, weather, parking, and event data from multiple Korean public data APIs.'
        ),
        React.createElement('p', null,
          'The platform features smart departure time calculation based on real-time traffic conditions, weather forecasts, and event start times. It provides multi-modal transit comparison (car, subway, bus, bike, walking) with weather-aware recommendations, predictive parking congestion modeling, and interactive Leaflet-based maps with route visualization.'
        ),
        React.createElement('p', null,
          'Built with Next.js 16 App Router, the application integrates multiple Korean public data APIs including Seoul Open Data API for traffic, KMA Weather API for forecasts, Seoul Parking API for parking availability, and KSPO Sports Facilities API for event venues. The system demonstrates advanced algorithmic calculations for departure time prediction, parking congestion modeling, and weather-aware transit recommendations.'
        )
      )
    },
    {
      id: 'my-role',
      type: 'role',
      roles: [
        {
          title: 'Full-Stack Developer',
          icon: Code,
          responsibilities: [
            'Architected and developed complete Next.js 16 application with App Router',
            'Integrated multiple Korean public data APIs (Seoul Traffic, KMA Weather, Parking, KSPO Facilities)',
            'Built intelligent departure time calculation algorithm combining traffic, weather, and event data',
            'Developed predictive parking congestion modeling with ML-like algorithms',
            'Created weather-aware transit mode recommendation system',
            'Implemented interactive Leaflet maps with markers, routes, and geolocation',
            'Designed server-side rendering with API route caching for performance'
          ],
          impacts: [
            'Delivered comprehensive event planning platform with real-time data integration',
            'Achieved accurate departure time predictions with multi-factor calculations',
            'Enabled intelligent parking recommendations with predictive modeling',
            'Created seamless user experience with interactive maps and real-time updates'
          ]
        },
        {
          title: 'Data Integration Engineer',
          icon: Database,
          responsibilities: [
            'Normalized data from 4+ different Korean public data APIs',
            'Implemented Haversine formula for accurate distance calculations',
            'Built data caching strategy with Next.js revalidation (60s-3600s)',
            'Created fallback data systems for API reliability',
            'Developed event generation system from facility data',
            'Designed parking prediction algorithm considering events, weather, and temporal factors'
          ],
          impacts: [
            'Ensured reliable data access with graceful error handling and fallbacks',
            'Optimized API usage with intelligent caching strategies',
            'Delivered accurate predictions through sophisticated algorithms',
            'Maintained high availability despite API rate limits'
          ]
        }
      ]
    },
    {
      id: 'problem',
      type: 'problem',
      summary: 'Planning trips to events at Olympic Park requires juggling multiple disconnected data sources: traffic conditions, weather forecasts, parking availability, and event schedules. Users struggle to determine optimal departure times and transportation modes.',
      content: 'Traditional navigation apps don\'t account for event-specific factors like parking congestion during events, arrival time requirements (30 minutes early), or weather impact on different transit modes. Users must manually check traffic, weather, parking, and event schedules across multiple platforms, leading to missed events, late arrivals, or poor transportation choices.',
      painPoints: [
        { description: 'No integrated platform combining traffic, weather, parking, and event data' },
        { description: 'Manual calculation of departure times considering multiple factors' },
        { description: 'Lack of predictive parking availability during events' },
        { description: 'No weather-aware transit mode recommendations' },
        { description: 'Difficulty comparing multiple transportation options with real-time data' }
      ],
      whyItMatters: 'Missing an event or arriving late due to poor planning creates frustration and wasted time. MovePARK eliminates guesswork by automatically calculating optimal departure times and recommending the best transportation mode based on real-time conditions, weather, and event-specific factors.'
    },
    {
      id: 'goals',
      type: 'goals',
      goals: [
        { icon: Zap, title: 'Smart Departure Calculation', metric: 'Multi-factor algorithm with traffic, weather, and event data' },
        { icon: Brain, title: 'Parking Intelligence', metric: 'Predictive congestion modeling with ML-like algorithms' },
        { icon: TrendingUp, title: 'Multi-Modal Transit', metric: 'Weather-aware recommendations across 5+ transportation modes' },
        { icon: Users, title: 'Real-Time Data Integration', metric: '4+ Korean public data APIs with intelligent caching' },
        { icon: BarChart3, title: 'Interactive Visualization', metric: 'Leaflet maps with markers, routes, and real-time updates' },
        { icon: Award, title: 'Performance', metric: 'Server-side rendering with optimized caching strategies' }
      ]
    },
    {
      id: 'research',
      type: 'research',
      insights: [
        {
          title: 'Korean Public Data API Analysis',
          items: [
            'Seoul Open Data API provides real-time traffic speed data with congestion levels (원활/서행/정체)',
            'KMA Weather API offers 3-day forecasts with detailed condition data',
            'Seoul Parking API includes capacity, occupancy, and fee information',
            'KSPO Sports Facilities API provides venue data for event generation',
            'Each API has different response structures requiring normalization',
            'API rate limits and caching strategies critical for performance'
          ]
        },
        {
          title: 'Algorithm Design Requirements',
          items: [
            'Departure time calculation must combine traffic speed, weather impact, and distance',
            'Parking prediction requires event attendance estimation and temporal factors',
            'Transit comparison needs mode-specific speed calculations and weather penalties',
            'Haversine formula provides accurate distance calculations for geolocation',
            'Confidence scoring important for prediction reliability'
          ]
        }
      ]
    },
    {
      id: 'architecture',
      type: 'architecture',
      items: [
        {
          title: 'System Architecture',
          description: 'Next.js 16 App Router with server-side rendering, API routes for data fetching, and intelligent caching strategies for performance and reliability.',
          features: [
            'Server Components for SEO and performance',
            'API Routes (/api/events, /api/traffic, /api/weather, /api/parking, /api/facilities)',
            'Next.js revalidation caching (60s for traffic, 3600s for weather)',
            'Fallback data from static JSON files for reliability',
            'URL search params for state management',
            'Geolocation integration with browser API',
            'Leaflet maps for interactive visualization'
          ]
        },
        {
          title: 'User Flows',
          userFlows: [
            {
              name: 'Event Planning Flow',
              icon: Users,
              description: 'User selects event, system calculates optimal departure time and recommends transportation',
              steps: [
                'User browses events at Olympic Park facilities',
                'Selects event from dropdown (updates URL with eventId)',
                'System fetches event data and venue coordinates',
                'Calculates desired arrival time (event start - 30 minutes)',
                'Fetches real-time traffic and weather data',
                'Calculates optimal departure time with multi-factor algorithm',
                'Compares transportation modes with weather-aware recommendations',
                'Displays parking predictions for event venue',
                'Shows interactive map with route and parking locations'
              ]
            },
            {
              name: 'Parking Discovery Flow',
              icon: MapPin,
              description: 'User views parking lots with predictive congestion and distance-based filtering',
              steps: [
                'System fetches parking data from Seoul Parking API',
                'Calculates distances from user location using Haversine formula',
                'Filters parking lots within 5 miles (8km)',
                'Runs parking prediction algorithm (event impact, weather, temporal factors)',
                'Sorts by predicted occupancy (lowest first)',
                'Displays parking cards with congestion predictions and confidence scores',
                'Shows parking locations on interactive map',
                'User can click parking lot for detailed information'
              ]
            },
            {
              name: 'Transit Comparison Flow',
              icon: TrendingUp,
              description: 'User compares multiple transportation modes with real-time data and weather impact',
              steps: [
                'System calculates travel time for each mode (car, subway, bus, bike, walk)',
                'Applies weather penalties based on forecast conditions',
                'Calculates costs (fuel, parking, transit fares)',
                'Filters impractical routes (walk >3km, bike >10km)',
                'Sorts by total time and recommends best option',
                'Displays comparison cards with time, cost, and weather impact',
                'Updates recommendations when weather or traffic changes'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'design-system',
      type: 'design-system',
      items: [
        {
          title: 'Color System',
          type: 'colors',
          content: {
            colors: [
              { name: 'Primary Blue', hex: '#3B82F6', usage: 'Primary actions and highlights' },
              { name: 'Success Green', hex: '#10B981', usage: 'Smooth traffic, available parking' },
              { name: 'Warning Orange', hex: '#F59E0B', usage: 'Slow traffic, moderate congestion' },
              { name: 'Danger Red', hex: '#EF4444', usage: 'Congested traffic, full parking' },
              { name: 'Neutral Gray', hex: '#6B7280', usage: 'Secondary text and borders' }
            ]
          }
        },
        {
          title: 'Component Structure',
          type: 'components',
          content: {
            components: [
              { title: 'Event Components', description: 'EventSelector, EventCard for event browsing and selection', icon: Component },
              { title: 'Map Components', description: 'MapView with Leaflet integration, markers, routes, and interactions', icon: MapPin },
              { title: 'Transit Components', description: 'TransitComparison with multi-mode cards and weather-aware recommendations', icon: TrendingUp },
              { title: 'Parking Components', description: 'ParkingCard, ParkingPredictionCard with congestion predictions', icon: Layers },
              { title: 'Weather Components', description: 'WeatherInfo, WeatherRiskCard with 3-day forecast and risk assessment', icon: Cloud },
              { title: 'Location Components', description: 'GeoLocationProvider for browser geolocation integration', icon: MapPin }
            ]
          }
        }
      ]
    },
    {
      id: 'system-architecture',
      type: 'system-architecture',
      categories: [
        {
          title: 'Frontend Architecture',
          icon: Code,
          items: [
            'Next.js 16.0.7 with App Router and Server Components',
            'React 19.2.0 with TypeScript 5',
            'Tailwind CSS 4 for styling',
            'Leaflet 1.9.4 and React-Leaflet 5.0.0 for mapping',
            'URL search params for state management',
            'Server-side rendering for SEO and performance',
            'Client components for interactive features (maps, geolocation)'
          ]
        },
        {
          title: 'Backend & API',
          icon: Database,
          items: [
            'Next.js API Routes for data fetching and processing',
            'Multiple Korean public data API integrations',
            'Intelligent caching with Next.js revalidation',
            'Fallback data from static JSON files',
            'Error handling with graceful degradation',
            'Data normalization pipelines for each API',
            'Haversine formula for distance calculations'
          ]
        },
        {
          title: 'Integrations',
          icon: Layers,
          items: [
            'Seoul Open Data API: Real-time traffic speed and congestion',
            'KMA Weather API: 3-day weather forecasts',
            'Seoul Parking API: Parking lot data and availability',
            'KSPO Sports Facilities API: Sports center, soccer field, pool data',
            'Browser Geolocation API: User location detection',
            'Leaflet Maps: Interactive map visualization'
          ]
        }
      ]
    },
    {
      id: 'key-features',
      type: 'key-features',
      metrics: [
        { title: 'API Integrations', description: '4+ Korean public data APIs with intelligent caching' },
        { title: 'Departure Calculation', description: 'Multi-factor algorithm with traffic, weather, and event data' },
        { title: 'Parking Predictions', description: 'ML-like algorithm with event, weather, and temporal factors' },
        { title: 'Transit Modes', description: '5+ transportation modes with weather-aware recommendations' }
      ],
      userFeatures: [
        {
          title: 'Smart Event Planning',
          icon: BarChart3,
          items: [
            'Browse events at Olympic Park facilities',
            'Automatic departure time calculation',
            'Arrival 30 minutes before event start',
            'Event-driven parking predictions',
            'Multi-modal transit comparison'
          ]
        },
        {
          title: 'Parking Intelligence',
          icon: MapPin,
          items: [
            'Real-time parking availability',
            'Predictive congestion modeling',
            'Distance-based filtering and sorting',
            'Capacity and fee information',
            'Confidence scoring for predictions'
          ]
        },
        {
          title: 'Interactive Maps',
          icon: MapPin,
          items: [
            'User location detection',
            'Destination and event markers',
            'Parking lot locations with congestion colors',
            'Route visualization',
            'Facility markers'
          ]
        }
      ],
      engineeringFeatures: [
        {
          title: 'Advanced Algorithms',
          icon: Brain,
          items: [
            'Multi-factor departure time calculation',
            'Parking congestion prediction with ML-like modeling',
            'Weather-aware transit recommendations',
            'Haversine formula for accurate distances',
            'Confidence scoring for predictions'
          ]
        },
        {
          title: 'Data Integration',
          icon: Layers,
          items: [
            'Normalization of 4+ different API structures',
            'Intelligent caching strategies (60s-3600s)',
            'Fallback data for reliability',
            'Error handling and graceful degradation',
            'Real-time data updates'
          ]
        }
      ]
    },
    {
      id: 'challenges',
      type: 'challenges',
      challenges: [
        {
          challenge: 'Integrating multiple Korean public data APIs with different response structures and rate limits',
          solution: 'Created normalization pipelines for each API, implemented intelligent caching strategies (60s for traffic, 3600s for weather), and built fallback data systems from static JSON files. Added comprehensive error handling to gracefully degrade when APIs are unavailable.'
        },
        {
          challenge: 'Building accurate departure time calculation combining traffic, weather, and event data',
          solution: 'Developed multi-factor algorithm using Haversine formula for distance, traffic speed with congestion penalties (5-50%), weather impact penalties (0-40%), and event-based arrival time requirements. The algorithm dynamically updates when any factor changes.'
        },
        {
          challenge: 'Creating predictive parking congestion model without historical data',
          solution: 'Built ML-like prediction algorithm considering event attendance estimation, drive percentage (30-50%), temporal factors (weekend +10%, peak hours +5%), weather impact (rain/snow +15% for covered parking), and current occupancy weighted average (60% current, 40% predicted). Added confidence scoring based on data availability.'
        },
        {
          challenge: 'Implementing weather-aware transit recommendations across multiple modes',
          solution: 'Created mode-specific calculations with weather penalties (car: rain +20%, snow +40%; bike: rain +30%, snow +50%). Built smart recommendation engine that filters impractical routes and prefers public transit in bad weather. Calculated costs for each mode including fuel, parking, and transit fares.'
        }
      ]
    },
    {
      id: 'results',
      type: 'results',
      metrics: [
        'Integrated 4+ Korean public data APIs with intelligent caching',
        'Accurate departure time predictions with multi-factor calculations',
        'Predictive parking congestion modeling with confidence scoring',
        'Weather-aware transit recommendations across 5+ modes',
        'Interactive maps with real-time data visualization',
        'Server-side rendering for SEO and performance',
        'Graceful error handling with fallback data systems'
      ],
      description: 'MovePARK successfully delivers a comprehensive event planning and navigation platform that integrates multiple real-time data sources. The intelligent departure time calculation, predictive parking modeling, and weather-aware transit recommendations provide users with actionable insights for planning trips to Olympic Park events. The platform demonstrates sophisticated algorithmic calculations, robust data integration, and user-centric design.'
    },
    {
      id: 'learnings',
      type: 'learnings',
      cards: [
        {
          title: 'Public Data API Integration',
          description: 'Learned to work with multiple Korean public data APIs, each with unique response structures and rate limits. Developed normalization pipelines, caching strategies, and fallback systems to ensure reliability despite API constraints.',
          icon: Layers
        },
        {
          title: 'Algorithmic Problem Solving',
          description: 'Gained expertise in building predictive algorithms without labeled training data. Combined multiple factors (events, weather, temporal patterns) to create ML-like prediction models with confidence scoring.',
          icon: Brain
        },
        {
          title: 'Geospatial Calculations',
          description: 'Mastered Haversine formula for accurate distance calculations, geolocation integration, and map visualization. Learned to work with coordinates, markers, routes, and interactive map features using Leaflet.',
          icon: MapPin
        },
        {
          title: 'Performance Optimization',
          description: 'Implemented intelligent caching strategies balancing data freshness with API rate limits. Used Next.js revalidation, server-side rendering, and fallback data to ensure fast, reliable performance.',
          icon: Zap
        }
      ]
    },
    {
      id: 'tech-stack',
      type: 'tech-stack',
      categories: [
        {
          category: 'Frontend Framework',
          items: [
            { name: 'Next.js 16', icon: SiNextdotjs },
            { name: 'React 19', icon: SiReact },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Tailwind CSS 4', icon: SiTailwindcss }
          ]
        },
        {
          category: 'Mapping & Location',
          items: [
            { name: 'Leaflet', icon: SiGooglemaps },
            { name: 'React-Leaflet', icon: SiGooglemaps },
            { name: 'Geolocation API', icon: MapPin }
          ]
        },
        {
          category: 'APIs & Services',
          items: [
            { name: 'Seoul Open Data API', icon: SiGooglemaps },
            { name: 'KMA Weather API', icon: Cloud },
            { name: 'Seoul Parking API', icon: MapPin },
            { name: 'KSPO Facilities API', icon: MapPin }
          ]
        },
        {
          category: 'Deployment',
          items: [
            { name: 'Vercel', icon: SiVercel },
            { name: 'GitHub', icon: SiGithub }
          ]
        }
      ]
    },
    {
      id: 'links',
      type: 'links',
      links: [],
      figmaUrl: '',
      caseStudyUrl: ''
    }
  ]
};
