package ru.osipuc.domclick.ui.fragments

import androidx.fragment.app.Fragment
import com.google.firebase.auth.PhoneAuthProvider
import kotlinx.android.synthetic.main.fragment_enter_sms_code.*
import ru.osipuc.domclick.R
import ru.osipuc.domclick.utilites.AUTH
import ru.osipuc.domclick.utilites.AppTextWatcher
import ru.osipuc.domclick.utilites.showToast


class EnterSmsCodeFragment(val id: String) : Fragment(R.layout.fragment_enter_sms_code) {

    override fun onStart() {
        super.onStart()
        enter_sms_code_fragment_edit_text.addTextChangedListener(AppTextWatcher{
            val string = enter_sms_code_fragment_edit_text.text.toString()
            if (string.length == 6) {
                enterCode()
            }
        })
    }

    private fun enterCode() {
        val code = enter_sms_code_fragment_edit_text.text.toString()
        val credential = PhoneAuthProvider.getCredential(id, code)
        AUTH.signInWithCredential(credential).addOnCompleteListener {task ->
            if (task.isSuccessful) {
                showToast("регистрация успешна")
            } else {
                showToast(task.exception.toString())
            }
        }
    }

}