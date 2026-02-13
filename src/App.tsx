import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { movements } from './data/movements';

const sortedMovements = [...movements].sort((a, b) => a.startYear - b.startYear);

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BC`;
  return `${year}`;
}

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-100 font-sans antialiased">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-semibold text-center text-white tracking-tight mb-12">
          Art History Timeline
        </h1>

        <VerticalTimeline
          layout="2-columns"
          animate={true}
          lineColor="#3b82f6"
          className="vertical-timeline-custom-line"
        >
          {sortedMovements.map((m) => (
            <VerticalTimelineElement
              key={m.id}
              id={m.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgba(30, 30, 36, 0.95)',
                color: '#e5e7eb',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '12px',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(30, 30, 36, 0.95)' }}
              date={`${formatYear(m.startYear)} – ${formatYear(m.endYear)}`}
              dateClassName="text-gray-300 font-medium"
              iconStyle={{
                background: '#3b82f6',
                color: '#fff',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)',
              }}
            >
              <h3 className="vertical-timeline-element-title text-lg font-semibold text-white">
                {m.name}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm text-gray-400 mt-1">
                Regions: {m.regionCodes.join(', ')}
              </h4>
              <p className="text-xs text-gray-500 mt-2">ID: {m.id}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default App;
