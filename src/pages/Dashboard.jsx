import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Shield, Users, Calendar, DollarSign, TrendingUp, Clock,
  Star, Activity, ChevronDown, ChevronRight, Settings,
  LogOut, Database, BarChart3, MessageSquare, Bell,
  FileText, CheckCircle, AlertTriangle, ArrowUpRight
} from 'lucide-react'
import { DataMinerWidget } from '../hooks/useWidgetfied'

const MOCK_STATS = {
  totalClients: 247,
  activeClients: 82,
  sessionsThisMonth: 134,
  monthlyRevenue: 14280,
  avgSessionValue: 106.57,
  retentionRate: 98,
  newClientsThisMonth: 12,
  cancelRate: 3.2,
}

const MOCK_UPCOMING = [
  { time: '9:00 AM', client: 'Jennifer K.', service: 'Deep Tissue', duration: '90 min', status: 'confirmed' },
  { time: '11:00 AM', client: 'Marcus T.', service: 'Sports Massage', duration: '60 min', status: 'confirmed' },
  { time: '1:00 PM', client: 'Sarah W.', service: 'Swedish Massage', duration: '90 min', status: 'pending' },
  { time: '3:00 PM', client: 'David L.', service: 'Hot Stone', duration: '75 min', status: 'confirmed' },
  { time: '5:00 PM', client: 'Amy R.', service: 'Prenatal', duration: '60 min', status: 'confirmed' },
]

const MOCK_RECENT_REVIEWS = [
  { author: 'Lisa M.', rating: 5, snippet: 'Best massage I\'ve ever had! The deep tissue work...', date: '2 days ago' },
  { author: 'James P.', rating: 5, snippet: 'Incredible experience. My chronic back pain is...', date: '5 days ago' },
  { author: 'Rachel S.', rating: 5, snippet: 'So professional and welcoming. Already booked my...', date: '1 week ago' },
]

const MOCK_TOP_SERVICES = [
  { name: 'Deep Tissue', sessions: 48, revenue: 6200, pct: 36 },
  { name: 'Swedish', sessions: 34, revenue: 3740, pct: 25 },
  { name: 'Sports Massage', sessions: 22, revenue: 2860, pct: 16 },
  { name: 'Hot Stone', sessions: 18, revenue: 2520, pct: 13 },
  { name: 'Prenatal', sessions: 12, revenue: 1260, pct: 10 },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const [openSections, setOpenSections] = useState({
    schedule: true,
    services: false,
    reviews: false,
    dataminer: false,
  })

  useEffect(() => {
    if (sessionStorage.getItem('st_admin_auth') !== 'true') {
      navigate('/admin')
    }
  }, [navigate])

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const handleSignOut = () => {
    sessionStorage.removeItem('st_admin_auth')
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-7 h-7 text-accent-gold" />
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Business Dashboard</h1>
            </div>
            <p className="text-neutral-400 text-sm">Serenity Touch Massage — Admin Panel</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors text-sm"
            >
              View Site
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Primary Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <Users className="w-7 h-7 text-blue-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.totalClients}</span>
            </div>
            <p className="text-neutral-400 text-sm">Total Clients</p>
            <p className="text-xs text-neutral-500 mt-1">{MOCK_STATS.activeClients} active this month</p>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <Calendar className="w-7 h-7 text-green-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.sessionsThisMonth}</span>
            </div>
            <p className="text-neutral-400 text-sm">Sessions This Month</p>
            <p className="text-xs text-neutral-500 mt-1">{MOCK_STATS.newClientsThisMonth} new clients</p>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <DollarSign className="w-7 h-7 text-accent-gold" />
              <span className="text-2xl font-bold text-white">${MOCK_STATS.monthlyRevenue.toLocaleString()}</span>
            </div>
            <p className="text-neutral-400 text-sm">Monthly Revenue</p>
            <p className="text-xs text-neutral-500 mt-1">${MOCK_STATS.avgSessionValue} avg per session</p>
          </div>

          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-5 border border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="w-7 h-7 text-purple-400" />
              <span className="text-2xl font-bold text-white">{MOCK_STATS.retentionRate}%</span>
            </div>
            <p className="text-neutral-400 text-sm">Client Retention</p>
            <p className="text-xs text-neutral-500 mt-1">{MOCK_STATS.cancelRate}% cancellation rate</p>
          </div>
        </div>

        {/* Secondary Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-neutral-800/30 backdrop-blur-sm rounded-lg p-4 border border-neutral-700/50">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-xl font-bold text-white">5.0</p>
                <p className="text-xs text-neutral-400">Google Rating (47 reviews)</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/30 backdrop-blur-sm rounded-lg p-4 border border-neutral-700/50">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-xl font-bold text-white">1,247</p>
                <p className="text-xs text-neutral-400">Website visits this month</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/30 backdrop-blur-sm rounded-lg p-4 border border-neutral-700/50">
            <p className="text-xs text-neutral-400 mb-2">Booking Conversion</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-neutral-700 rounded-full h-2">
                <div className="bg-green-400 h-2 rounded-full" style={{ width: '18%' }} />
              </div>
              <span className="text-sm text-white">18%</span>
            </div>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* Today's Schedule */}
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700 overflow-hidden">
            <button
              onClick={() => toggleSection('schedule')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-neutral-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Today's Schedule</span>
                <span className="text-sm text-neutral-400">({MOCK_UPCOMING.length} appointments)</span>
              </div>
              {openSections.schedule ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.schedule && (
              <div className="px-5 py-4 border-t border-neutral-700">
                <div className="space-y-3">
                  {MOCK_UPCOMING.map((appt, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-neutral-700/30 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="text-right w-16">
                          <span className="text-sm font-medium text-white">{appt.time}</span>
                        </div>
                        <div className="w-px h-8 bg-accent-gold/30" />
                        <div>
                          <p className="text-white font-medium text-sm">{appt.client}</p>
                          <p className="text-xs text-neutral-400">{appt.service} · {appt.duration}</p>
                        </div>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        appt.status === 'confirmed'
                          ? 'bg-green-900/30 text-green-400 border border-green-800/30'
                          : 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/30'
                      }`}>
                        {appt.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Top Services */}
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700 overflow-hidden">
            <button
              onClick={() => toggleSection('services')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-neutral-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Top Services</span>
                <span className="text-sm text-neutral-400">(this month)</span>
              </div>
              {openSections.services ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.services && (
              <div className="px-5 py-4 border-t border-neutral-700">
                <div className="space-y-3">
                  {MOCK_TOP_SERVICES.map((svc, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-sm text-neutral-400 w-32 truncate">{svc.name}</span>
                      <div className="flex-1">
                        <div className="bg-neutral-700 rounded-full h-2">
                          <div
                            className="bg-accent-gold h-2 rounded-full transition-all"
                            style={{ width: `${svc.pct}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-white w-12 text-right">{svc.sessions}</span>
                      <span className="text-sm text-accent-gold w-16 text-right">${svc.revenue.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Recent Reviews */}
          <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl border border-neutral-700 overflow-hidden">
            <button
              onClick={() => toggleSection('reviews')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-neutral-700/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Recent Reviews</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-900/30 text-green-400 border border-green-800/30">All 5-star</span>
              </div>
              {openSections.reviews ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.reviews && (
              <div className="px-5 py-4 border-t border-neutral-700">
                <div className="space-y-3">
                  {MOCK_RECENT_REVIEWS.map((review, i) => (
                    <div key={i} className="p-3 bg-neutral-700/30 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, j) => (
                              <Star key={j} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-white">{review.author}</span>
                        </div>
                        <span className="text-xs text-neutral-500">{review.date}</span>
                      </div>
                      <p className="text-sm text-neutral-300 font-light italic">"{review.snippet}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Data Miner Widget */}
          <div className="bg-gradient-to-r from-accent-gold/10 to-yellow-900/10 backdrop-blur-sm rounded-xl border border-accent-gold/20 overflow-hidden">
            <button
              onClick={() => toggleSection('dataminer')}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-accent-gold/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 text-accent-gold" />
                <span className="text-lg font-semibold text-white">Data Miner</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent-gold/20 text-accent-gold border border-accent-gold/30 font-medium">Widget</span>
              </div>
              {openSections.dataminer ?
                <ChevronDown className="w-5 h-5 text-neutral-400" /> :
                <ChevronRight className="w-5 h-5 text-neutral-400" />
              }
            </button>

            {openSections.dataminer && (
              <div className="px-5 py-6 border-t border-accent-gold/20">
                <p className="text-neutral-300 text-sm font-light mb-4">
                  Mine and enrich local business data — find potential referral partners, corporate wellness leads, and market insights for the Denver area.
                </p>
                <DataMinerWidget
                  id="dashboard-lead-miner-widget"
                  displayMode="inline"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-neutral-500 text-sm">
          Logged in as: admin@serenitytouchmassage.com (Owner)
        </div>
      </div>
    </div>
  )
}
