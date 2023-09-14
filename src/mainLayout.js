import React from 'react'

function mainLayout() {
  return (
  <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Sidebar />} />
    <Route index element={<MyNavbar />} />
    <Route index element={<Dashboard />} />
  </Route>
  <Route path="/AddCandidate" element={<AddCandidate />} />
</Routes>

  )
}

export default mainLayout