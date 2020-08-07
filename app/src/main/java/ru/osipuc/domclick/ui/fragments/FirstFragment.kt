package ru.osipuc.domclick.ui.fragments

import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import kotlinx.android.synthetic.main.fragment_first.*
import ru.osipuc.domclick.R
import ru.osipuc.domclick.utilites.APP_ACTIVITY


class FirstFragment : Fragment(R.layout.fragment_first) {

    override fun onResume() {
        super.onResume()

        first_fragment_reg_btn.setOnClickListener {
            Navigation.findNavController(APP_ACTIVITY, R.id.main_host_fragment)
                .navigate(R.id.action_firstFragment_to_registrationFragment)
        }

        first_fragment_skip_btn.setOnClickListener {
            Navigation.findNavController(APP_ACTIVITY, R.id.main_host_fragment)
                .navigate(R.id.action_firstFragment_to_navBottomFragment)
        }
    }

}